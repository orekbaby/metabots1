import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatestData } from '@/utils/types';

interface WatchlistState {
  tokens: LatestData[]; // Store full token details
}

// Function to get the initial watchlist from localStorage
const getInitialWatchlist = (): LatestData[] => {
  try {
    const storedWatchlist = localStorage.getItem('watchlist');
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  } catch (error) {
    console.error('Failed to parse watchlist from localStorage:', error);
    return [];
  }
};

const initialState: WatchlistState = {
  tokens: getInitialWatchlist(),
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<LatestData>) => {
      // Check if the token is already in the watchlist by its mint address
      const exists = state.tokens.some(token => token.token?.mint === action.payload.token?.mint);
      if (!exists) {
        state.tokens.push(action.payload); // Add token if it doesn't exist
        localStorage.setItem('watchlist', JSON.stringify(state.tokens)); // Update localStorage
      }
    },
    removeToken: (state, action: PayloadAction<string>) => {
      // Filter out the token based on the mint address provided in action.payload
      state.tokens = state.tokens.filter(token => token.token?.mint !== action.payload);
      
      // Update localStorage to reflect the removal of the token
      localStorage.setItem('watchlist', JSON.stringify(state.tokens));
    },
  },
});

export const { addToken, removeToken } = watchlistSlice.actions;
export default watchlistSlice.reducer;
