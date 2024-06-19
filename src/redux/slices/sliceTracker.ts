import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TypeInitialState {
  openMenu: boolean;
}

const initialState: TypeInitialState = {
  openMenu: false
};

const sliceTracker = createSlice({
  name: "sliceTracker",
  initialState,
  reducers: {
    changeMenu: (state) => {
      state.openMenu = !state.openMenu;
    }
  },
  selectors: {
    getOpenMenu: (state) => state.openMenu
  }
});

export const { changeMenu } = sliceTracker.actions;
export const { getOpenMenu } = sliceTracker.selectors;
export default sliceTracker.reducer;
