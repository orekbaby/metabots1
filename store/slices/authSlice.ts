import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginWallet, fetchProfileData } from "@/app/api/auth/auth";
import Cookies from "js-cookie";

interface AuthState {
  user: any;
  authToken: string | null;
  error: string;
  isConnected: boolean;
  publicAddress: string | null;
  isLoading: boolean;
  isProfileFetched: boolean; 
}

const initialState: AuthState = {
  user: null,
  authToken: Cookies.get("authToken") || null,
  error: "",
  isConnected: false,
  publicAddress: null,
  isLoading: false,
  isProfileFetched: false,
};

// Connect Wallet and authenticate
export const connectWallet = createAsyncThunk(
  "auth/connectWallet",
  async (
    { address, signMessage }: { address: string; signMessage: (message: { message: string }) => Promise<string> },
    { rejectWithValue }
  ) => {
    return new Promise<{ user: any; authToken: string }>((resolve, reject) => {
      postLoginWallet(
        address,
        signMessage,
        (user, authToken) => {
          Cookies.set("authToken", authToken, { expires: 7 });
          localStorage.setItem("auth-storage", JSON.stringify({ authToken, user }));
    
          resolve({ user, authToken });
        },
        (error) => {
          reject(rejectWithValue(error));
        }
      );
    });    
  }
);

// Fetch user profile using token
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (token: string, { getState, rejectWithValue }) => {
    const { auth } = getState() as { auth: AuthState };

    // Avoid fetching the profile if already fetched
    if (auth.isProfileFetched) {
      return rejectWithValue("Profile already fetched");
    }

    try {
      const data = await fetchProfileData(token);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch user profile");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authToken = null;
      state.isConnected = false;
      state.publicAddress = null;
      state.isProfileFetched = false; // Reset profile fetched status on logout

      Cookies.remove("authToken");
      localStorage.removeItem("auth-storage");
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Connect Wallet
      .addCase(connectWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(connectWallet.fulfilled, (state, action) => {
        const { user, authToken } = action.payload;
        state.user = user;
        state.authToken = authToken;
        state.isConnected = true;
        state.isProfileFetched = true; // Mark profile as fetched
        state.isLoading = false;
        state.error = "";
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
        state.isConnected = false;
      })
      // Fetch User Profile
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isProfileFetched = true; // Set profile fetched flag
        state.isLoading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const { logout, setError } = authSlice.actions;
export default authSlice.reducer;
