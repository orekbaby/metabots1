// walletSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WalletData } from '@/utils/types'; // Adjust the path as necessary
import { FaBedPulse } from 'react-icons/fa6';

interface WalletState {
  walletData: WalletData | null;
 
  loading:boolean
}

const initialState: WalletState = {
  walletData: null,
  loading: false
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
  
    storeWalletAnalysis: (state, action: PayloadAction<WalletData>) => {
      state.walletData = action.payload;
      // how do i set the loading state and use it in another component 
    },
  
  },
});

export const { storeWalletAnalysis } = walletSlice.actions;
export default walletSlice.reducer;
