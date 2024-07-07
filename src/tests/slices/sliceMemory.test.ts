import { configureStore } from "@reduxjs/toolkit";

import sliceMemory, {
  changeTheme,
  changeTimeStamp,
  fetchCurrencies,
  getDataCurrencies,
  getLoadCurrencies,
  getTheme,
  getTimeStamp
} from "@redux/slices/sliceMemory";

import { expect } from "@jest/globals";

jest.mock("@utils/services/currencyApi", () => ({
  serviceCurrencies: {
    getCurrencies: jest.fn(
      async () =>
        await Promise.resolve({
          data: { data: { USD: { code: "USD", value: 1 } } }
        })
    )
  }
}));

describe("sliceMemory", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        sliceMemory
      }
    });
  });

  describe("initialState", () => {
    it("should have the correct initial state", () => {
      expect(store.getState().sliceMemory).toEqual({
        theme: "dark",
        timeStamp: 0,
        loading: false,
        data: {}
      });
    });
  });

  describe("reducers", () => {
    it("should change theme", () => {
      store.dispatch(changeTheme());
      expect(store.getState().sliceMemory.theme).toBe("white");
      store.dispatch(changeTheme());
      expect(store.getState().sliceMemory.theme).toBe("dark");
    });

    it("should change timeStamp", () => {
      store.dispatch(changeTimeStamp(12345));
      expect(store.getState().sliceMemory.timeStamp).toBe(12345);
    });
  });

  describe("extraReducers", () => {
    it("should set loading to true when fetchCurrencies is pending", () => {
      store.dispatch(fetchCurrencies());
      expect(store.getState().sliceMemory.loading).toBe(true);
    });

    it("should set loading to false and update data when fetchCurrencies is fulfilled", async () => {
      await store.dispatch(fetchCurrencies());
      expect(store.getState().sliceMemory.loading).toBe(false);
      expect(store.getState().sliceMemory.data).toEqual({
        USD: { code: "USD", value: 1 }
      });
    });
  });

  describe("selectors", () => {
    it("should getTheme", () => {
      expect(getTheme(store.getState())).toBe("dark");
    });

    it("should getTimeStamp", () => {
      expect(getTimeStamp(store.getState())).toBe(0);
    });

    it("should getDataCurrencies", () => {
      expect(getDataCurrencies(store.getState())).toEqual({});
    });

    it("should getLoadCurrencies", () => {
      expect(getLoadCurrencies(store.getState())).toBe(false);
    });
  });
});
