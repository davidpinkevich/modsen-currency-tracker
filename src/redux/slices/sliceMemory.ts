import { createSlice } from "@reduxjs/toolkit";

interface TypeInitialState {
  theme: string;
}

const initialState: TypeInitialState = {
  theme: "dark"
};

const sliceMemory = createSlice({
  name: "sliceMemory",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "dark" ? "white" : "dark";
    }
  },
  selectors: {
    getTheme: (state) => state.theme
  }
});

export const { changeTheme } = sliceMemory.actions;
export const { getTheme } = sliceMemory.selectors;
export default sliceMemory.reducer;
