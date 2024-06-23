import { type PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TypeInitialState {
  openMenu: boolean;
  openModal: boolean;
  conversionISO: {
    from: string;
    to: string;
  };
}

const initialState: TypeInitialState = {
  openMenu: false,
  openModal: false,
  conversionISO: {
    from: "",
    to: ""
  }
};

const sliceTracker = createSlice({
  name: "sliceTracker",
  initialState,
  reducers: {
    changeMenu: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
    changeModal: (state) => {
      state.openModal = !state.openModal;
    },
    changeConversionISOFrom: (state, action: PayloadAction<string>) => {
      state.conversionISO.from = action.payload;
    },
    changeConversionISOTo: (state, action: PayloadAction<string>) => {
      state.conversionISO.to = action.payload;
    }
  },
  selectors: {
    getOpenMenu: (state) => state.openMenu,
    getOpenModal: (state) => state.openModal,
    getConversionISO: (state) => state.conversionISO
  }
});

export const {
  changeMenu,
  changeModal,
  changeConversionISOFrom,
  changeConversionISOTo
} = sliceTracker.actions;
export const { getOpenMenu, getOpenModal, getConversionISO } =
  sliceTracker.selectors;
export default sliceTracker.reducer;
