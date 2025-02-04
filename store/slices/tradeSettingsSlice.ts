// tradeSettingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TradeSettingsState {
  slippage: number;
  solPriorityFee: string;
  solPriorityCheck:boolean;
  jitoTipValue: number;
  jitoCheck: boolean;
  jitoTipLabel:string;
  takeProfit: string;
  stopLoss: string;
  Tp_SLCheck: boolean;
  takeProfitPercentage: number;
  stopLossPercentage: number;
}

const initialState: TradeSettingsState = {
  slippage: 50,
  solPriorityFee: "0.0001",
  solPriorityCheck: true,
  jitoTipValue: 75,
  jitoTipLabel:"High",
  jitoCheck: true,
  takeProfit: "100",
  stopLoss: "30",
  Tp_SLCheck: true,
  takeProfitPercentage: 60,
  stopLossPercentage: 60,
};

const tradeSettingsSlice = createSlice({
  name: 'tradeSettings',
  initialState,
  reducers: {
    setTradeSettings: (state, action: PayloadAction<Partial<TradeSettingsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTradeSettings } = tradeSettingsSlice.actions;
export default tradeSettingsSlice.reducer;
