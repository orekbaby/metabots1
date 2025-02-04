
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCopyTrade } from '@/utils/apiCalls';
import { CopyTradeData } from '@/utils/types';

interface CopyTradeState {
  copyTradeData: CopyTradeData[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CopyTradeState = {
  copyTradeData: null,
  status: 'idle',
  error: null,
};

// Async thunk for fetching copy trades
export const fetchCopyTradesAsync = createAsyncThunk(
  'copyTrade/fetchCopyTrades',
  async (params: { token: string; userId: string }, { rejectWithValue }) => {
    try {
      const response = await fetchCopyTrade(params.token, params.userId);
      if (response.status) {
        return response.data;
      } else {
        return rejectWithValue(response.reason || 'Something went wrong');
      }
    } catch (error) {
      return rejectWithValue('Failed to fetch copy trades');
    }
  }
);

const copyTradeSlice = createSlice({
  name: 'copyTrade',
  initialState,
  reducers: {
    setCopyTradeData(state, action: PayloadAction<CopyTradeData[]>) {
      state.copyTradeData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCopyTradesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCopyTradesAsync.fulfilled, (state, action: PayloadAction<CopyTradeData[]>) => {
        state.status = 'succeeded';
        state.copyTradeData = action.payload;
      })
      .addCase(fetchCopyTradesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setCopyTradeData } = copyTradeSlice.actions;
export default copyTradeSlice.reducer;
