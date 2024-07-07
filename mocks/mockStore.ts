const mockDataStore = {
  sliceMemory: {
    theme: "dark",
    timeStamp: 0,
    loading: false,
    data: {
      USD: { code: "USD", value: 1.0 },
      ARS: { code: "ARS", value: 913.855606593 },
      AUD: { code: "AUD", value: 1.499530299 },
      BTC: { code: "BTC", value: 0.0000161101 },
      CAD: { code: "CAD", value: 1.3674902515 },
      CNY: { code: "CNY", value: 7.26957113 },
      EUR: { code: "EUR", value: 0.9301501723 },
      GBP: { code: "GBP", value: 0.7880001144 },
      JPY: { code: "JPY", value: 161.4800511881 }
    }
  },
  sliceTracker: {
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
      start: "1",
      end: "2"
    },
    dataTimeseries: []
  },
  _persist: {
    version: -1,
    rehydrated: true
  }
};

export { mockDataStore };
