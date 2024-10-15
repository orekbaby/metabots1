"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginWallet, fetchProfileData } from "@/app/api/auth/auth";
import Cookies from "js-cookie";
import { modal } from '@/context/index';

// Define initial state
interface AuthState {
  user: any;
  authToken: string | null;
  error: string;
  isConnected: boolean;
  publicAddress: string | null;
  showSuccessDialog: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  authToken: null,
  error: "",
  isConnected: false,
  publicAddress: null,
  showSuccessDialog: true,
  isLoading: false,
};

// Async Thunks for handling side effects
export const connectWallet = createAsyncThunk(
  "auth/connectWallet",
  async (
    { address, signMessage }: { address: string; signMessage: (message: { message: string }) => Promise<string> },
    { getState, dispatch }
  ) => {
    try {
      // Clear previous user data and pending requests
      dispatch(clearPendingRequest());

      console.log("Attempting to login with address:", address);
      const message = "Please sign this message to log in.";
      const signature = await signMessage({ message });

      // Call the login API with the signature and address
      await postLoginWallet(
        signMessage, // Pass the signMessage function here
        (user: any, token: string) => {
          console.log("Login successful:", user, token);
          dispatch(setUser({ user, token }));
          Cookies.set("authToken", token, { expires: 7 });
        },
        (error: string) => {
          console.log("Login failed:", error);
          dispatch(setError(error));
          modal.close();
        },
        address // The public address remains the same
      );
      modal.close();
    } catch (error) {
      console.log("Connection declined:", error);
      dispatch(setError("Connection declined"));
      modal.close();
    }
  }
);



export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (token: string, { dispatch }) => {
    try {
      const data = await fetchProfileData(token);
      dispatch(setUser({ user: data, token }));
      modal.close();
    } catch (error) {
      dispatch(setError("Failed to fetch user profile"));
      modal.close();
    }
  }
);

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: any; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.authToken = token;
      state.isConnected = true;
      state.publicAddress = user.publicAddress; // Assuming user has a publicAddress
      state.error = "";
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.user = null;
      state.authToken = null;
      state.isConnected = false;
      state.publicAddress = null;
    },
    logout: (state) => {
      state.user = null;
      state.authToken = null;
      state.isConnected = false;
      state.publicAddress = null;
      state.showSuccessDialog = false;
      Cookies.remove("authToken");
      localStorage.removeItem("auth-storage");
    },
    setDisableSuccessDialog: (state, action: PayloadAction<boolean>) => {
      state.showSuccessDialog = action.payload;
    },
    clearPendingRequest: (state) => {
      // Nullify public address and user to clear any pending requests
      state.user = null;
      state.publicAddress = null;
      state.isConnected = false;
      state.error = "Previous connection cleared. Ready for fresh connection.";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(connectWallet.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(connectWallet.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUser, setError, logout, setDisableSuccessDialog, clearPendingRequest } = authSlice.actions;

export default authSlice.reducer;
