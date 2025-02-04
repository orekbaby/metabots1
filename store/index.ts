import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import walletReducer from "./slices/walletSlice";
import copyTradeReducer from "./slices/copyTradeSlice";
import tradeSettingsReducer from './slices/tradeSettingsSlice'; // Import your trade settings slice
import filtersReducer from './slices/filtersSlice';
import watchListReducer from '@/store/slices/watchListSlice';
import walletVisibilityReducer from "./slices/walletVisibilitySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer,
    copyTrade: copyTradeReducer,
    tradeSettings: tradeSettingsReducer,
    filters: filtersReducer,
    watchlist: watchListReducer,
    walletVisibility: walletVisibilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
