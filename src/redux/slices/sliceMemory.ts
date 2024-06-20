import { createSlice } from "@reduxjs/toolkit";

import { ThemeMode } from "@constants/themeMode";

interface TypeInitialState {
  theme: string;
}

const initialState: TypeInitialState = {
  theme: ThemeMode.dark
};

const sliceMemory = createSlice({
  name: "sliceMemory",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme =
        state.theme === ThemeMode.dark ? ThemeMode.white : ThemeMode.dark;
    }
  },
  selectors: {
    getTheme: (state) => state.theme
  }
});

export const { changeTheme } = sliceMemory.actions;
export const { getTheme } = sliceMemory.selectors;
export default sliceMemory.reducer;
