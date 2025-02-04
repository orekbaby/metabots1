// authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginWallet, fetchProfileData } from "@/app/api/auth/auth";
import Cookies from "js-cookie";

// Define the initial state
interface AuthState {
  user: any;
  walletData: any | null;
  authToken: string | null;
  error: string;
  successMessage: string;
  isConnected: boolean;
  publicAddress: string | null;
  isLoading: boolean;
  isProfileFetched: boolean;
}

const initialState: AuthState = {
  user: null,
  walletData: null,
  authToken: Cookies.get("authToken") || null,
  error: "",
  successMessage: "",
  isConnected: false,
  publicAddress: null,
  isLoading: false,
  isProfileFetched: false,
};

// Thunk for connecting the wallet and authenticating the user
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

// Thunk for fetching the user profile using the token
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (token: string, { rejectWithValue }) => {
    try {
      const data = await fetchProfileData(token);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch user profile");
    }
  }
);

// Define the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authToken = null;
      state.isConnected = false;
      state.publicAddress = null;
      state.isProfileFetched = false;
      state.successMessage = "";
      Cookies.remove("authToken");
      localStorage.removeItem("auth-storage");
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    clearLoading: (state) => {
      state.isLoading = false;
    }
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
        state.isProfileFetched = true;
        state.isLoading = false;
        state.error = "";
        state.successMessage = "You have now successfully logged in!";
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
        state.isConnected = false;
      })
      // Fetch User Profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isProfileFetched = true;
        state.isLoading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        // Only set error if it's not due to the profile already being fetched
        if (action.payload !== "Profile already fetched") {
          state.error = action.payload as string;
          state.isLoading = false;
        }
      });
  },
});

// Export actions and reducer
export const { logout, setError, setSuccessMessage, setLoading, clearLoading } = authSlice.actions;
export default authSlice.reducer;
