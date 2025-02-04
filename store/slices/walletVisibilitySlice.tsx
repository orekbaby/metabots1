// /store/walletSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  isWalletVisible: boolean;
}

const initialState: WalletState = {
  isWalletVisible: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    toggleWalletVisibility: (state) => {
      state.isWalletVisible = !state.isWalletVisible;
    },
  },
});

export const { toggleWalletVisibility } = walletSlice.actions;
export default walletSlice.reducer;
