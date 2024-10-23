import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WalletData } from '@/utils/types'; // Adjust the path as necessary

interface WalletState {
  walletData: WalletData | null;
  loading: boolean;
}

const initialState: WalletState = {
  walletData: null,
  loading: false,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    storeWalletAnalysis: (state, action: PayloadAction<WalletData>) => {
      state.walletData = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { storeWalletAnalysis, setLoading, clearLoading } = walletSlice.actions;
export default walletSlice.reducer;
