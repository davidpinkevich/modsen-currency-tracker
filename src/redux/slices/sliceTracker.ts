import { type PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getCurrentDate, getThirtyDaysAgoDate } from "@utils/helpers/getDate";
import { serviceTimeseries } from "@utils/services/timeseriesApi";
import { type TypeDataTimeseries } from "@src/types";

interface TypeInitialState {
  openMenu: boolean;
  openModal: boolean;
  loading: boolean;
  conversionISO: {
    from: string;
    to: string;
  };
  paramsTimeseries: {
    from: string;
    to: string;
    start: string;
    end: string;
  };
  dataTimeseries: TypeDataTimeseries | undefined;
}

const initialState: TypeInitialState = {
  openMenu: false,
  openModal: false,
  loading: false,
  conversionISO: {
    from: "",
    to: ""
  },
  paramsTimeseries: {
    from: "USD",
    to: "EUR",
    start: getThirtyDaysAgoDate(),
    end: getCurrentDate()
  },
  dataTimeseries: []
};

export const fetchTimeseries = createAsyncThunk(
  "sliceTracker/fetchTimeseries",
  async () => {
    return await serviceTimeseries.getTimeseries(
      "USD",
      "EUR",
      "2024-05-12",
      "2024-06-12"
    );
  }
);

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
    },
    changeParamsTimeseriesFrom: (state, action: PayloadAction<string>) => {
      state.paramsTimeseries.from = action.payload;
    },
    changeParamsTimeseriesTo: (state, action: PayloadAction<string>) => {
      state.paramsTimeseries.to = action.payload;
    },
    changeParamsTimeseriesStart: (state, action: PayloadAction<string>) => {
      state.paramsTimeseries.start = action.payload;
    },
    changeParamsTimeseriesEnd: (state, action: PayloadAction<string>) => {
      state.paramsTimeseries.end = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeseries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTimeseries.fulfilled, (state, action) => {
        state.loading = false;
        state.dataTimeseries = action.payload;
      });
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
  changeConversionISOTo,
  changeParamsTimeseriesFrom,
  changeParamsTimeseriesTo,
  changeParamsTimeseriesStart,
  changeParamsTimeseriesEnd
} = sliceTracker.actions;
export const { getOpenMenu, getOpenModal, getConversionISO } =
  sliceTracker.selectors;
export default sliceTracker.reducer;
