import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "@/utils/types";

interface FilterState {
  fresh_minted: IFilter;
  dex: IFilter;
  soon_to_moon: IFilter;
}

const INITIAL_STATE: IFilter = {
  burned: false,
  top10: false,
  social: false,
  minLiquidity: "0",
  maxLiquidity: "1000000000000000",
  minVolume: "0",
  maxVolume: "1000000000000000",
  minMCap: "0",
  maxMCap: "1000000000000000",
  minTransactions: "0",
  maxTransactions: "1000000000000000",
  minBuys: "0",
  maxBuys: "1000000000000000",
  minSells: "0",
  maxSells: "1000000000000000",
};

const initialState: FilterState = {
  fresh_minted: INITIAL_STATE,
  dex: INITIAL_STATE,
  soon_to_moon: INITIAL_STATE,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFreshMinted(state, action: PayloadAction<Partial<IFilter>>) {
      state.fresh_minted = { ...state.fresh_minted, ...action.payload };
    },
    updateDex(state, action: PayloadAction<Partial<IFilter>>) {
      state.dex = { ...state.dex, ...action.payload };
    },
    updateSoonToMoon(state, action: PayloadAction<Partial<IFilter>>) {
      state.soon_to_moon = { ...state.soon_to_moon, ...action.payload };
    },
    
  },


});

export const {
  updateFreshMinted,
  updateDex,
  updateSoonToMoon,
  
  
} = filtersSlice.actions;

export default filtersSlice.reducer;
