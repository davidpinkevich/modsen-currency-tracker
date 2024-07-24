import { configureStore } from "@reduxjs/toolkit";

import { getCurrentDate, getThirtyDaysAgoDate } from "@utils/helpers/getDate";
import sliceTracker, {
  changeConversionISOFrom,
  changeConversionISOTo,
  changeMenu,
  changeModal,
  changeParamsTimeseriesEnd,
  changeParamsTimeseriesFrom,
  changeParamsTimeseriesStart,
  changeParamsTimeseriesTo,
  fetchTimeseries,
  getConversionISO,
  getLoadingGraph,
  getOpenMenu,
  getOpenModal
} from "@redux/slices/sliceTracker";

import { expect } from "@jest/globals";

jest.mock("@utils/services/timeseriesApi", () => ({
  serviceTimeseries: {
    getTimeseries: jest.fn(
      async () =>
        await Promise.resolve([
          {
            rate_close: 1,
            rate_open: 1.1
          }
        ])
    )
  }
}));

describe("sliceTracker", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        sliceTracker
      }
    });
  });

  describe("initialState", () => {
    it("should have the correct initial state", () => {
      expect(store.getState().sliceTracker).toEqual({
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
      });
    });
  });

  describe("reducers", () => {
    it("should change openMenu correctly", () => {
      store.dispatch(changeMenu(true));
      expect(getOpenMenu(store.getState())).toBe(true);
    });

    it("should change openModal correctly", () => {
      store.dispatch(changeModal());
      expect(getOpenModal(store.getState())).toBe(true);
      store.dispatch(changeModal());
      expect(getOpenModal(store.getState())).toBe(false);
    });

    it("should change conversionISOFrom correctly", () => {
      const newFrom = "EUR";
      store.dispatch(changeConversionISOFrom(newFrom));
      expect(getConversionISO(store.getState()).from).toBe(newFrom);
    });

    it("should change conversionISOTo correctly", () => {
      const newTo = "USD";
      store.dispatch(changeConversionISOTo(newTo));
      expect(getConversionISO(store.getState()).to).toBe(newTo);
    });

    it("should change paramsTimeseriesFrom correctly", () => {
      const newFrom = "EUR";
      store.dispatch(changeParamsTimeseriesFrom(newFrom));
      expect(store.getState().sliceTracker.paramsTimeseries.from).toBe(newFrom);
    });

    it("should change paramsTimeseriesTo correctly", () => {
      const newTo = "USD";
      store.dispatch(changeParamsTimeseriesTo(newTo));
      expect(store.getState().sliceTracker.paramsTimeseries.to).toBe(newTo);
    });

    it("should change paramsTimeseriesStart correctly", () => {
      const newStart = "2023-10-25";
      store.dispatch(changeParamsTimeseriesStart(newStart));
      expect(store.getState().sliceTracker.paramsTimeseries.start).toBe(
        newStart
      );
    });

    it("should change paramsTimeseriesEnd correctly", () => {
      const newEnd = "2023-10-27";
      store.dispatch(changeParamsTimeseriesEnd(newEnd));
      expect(store.getState().sliceTracker.paramsTimeseries.end).toBe(newEnd);
    });
  });

  describe("fetchTimeseries", () => {
    it("should dispatch pending and fulfilled actions correctly", async () => {
      await store.dispatch(
        fetchTimeseries({
          from: "USD",
          to: "EUR",
          start: "2023-10-25",
          end: "2023-10-27"
        })
      );
      expect(store.getState().sliceTracker.loading).toBe(false);
      expect(store.getState().sliceTracker.dataTimeseries).toEqual([
        {
          rate_close: 1,
          rate_open: 1.1
        }
      ]);
    });
  });

  describe("selectors", () => {
    it("should return correct openMenu", () => {
      expect(getOpenMenu(store.getState())).toBe(false);
    });

    it("should return correct openModal", () => {
      expect(getOpenModal(store.getState())).toBe(false);
    });

    it("should return correct conversionISO", () => {
      expect(getConversionISO(store.getState())).toEqual({
        from: "",
        to: ""
      });
    });

    it("should return correct loading state", () => {
      expect(getLoadingGraph(store.getState())).toBe(false);
    });
  });
});
