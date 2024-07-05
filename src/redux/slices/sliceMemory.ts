import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ThemeMode } from "@constants/themeMode";
import { serviceCurrencies } from "@utils/services/currencyApi";
import { type TypeDataCurrency } from "@src/types";

interface TypeInitialState {
  theme: string;
  timeStamp: number;
  loading: boolean;
  data: TypeDataCurrency | undefined;
}

const initialState: TypeInitialState = {
  theme: ThemeMode.DARK,
  timeStamp: 0,
  loading: false,
  data: {}
};

export const fetchCurrencies = createAsyncThunk(
  "sliceMemory/fetchCurrencies",
  async () => {
    const response = await serviceCurrencies.getCurrencies();
    if (response) {
      return response.data.data;
    }
    return undefined;
  }
);

const sliceMemory = createSlice({
  name: "sliceMemory",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme =
        state.theme === ThemeMode.DARK ? ThemeMode.WHITE : ThemeMode.DARK;
    },
    changeTimeStamp: (state, action: PayloadAction<number>) => {
      state.timeStamp = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
  selectors: {
    getTheme: (state) => state.theme,
    getTimeStamp: (state) => state.timeStamp,
    getDataCurrencies: (state) => state.data,
    getLoadCurrencies: (state) => state.loading
  }
});

export const { changeTheme, changeTimeStamp } = sliceMemory.actions;
export const { getTheme, getTimeStamp, getDataCurrencies, getLoadCurrencies } =
  sliceMemory.selectors;
export default sliceMemory.reducer;
