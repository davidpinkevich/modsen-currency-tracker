const createQueryCurrencies = (arr: Array<string>): string => {
  return (
    `${process.env.URL_CURRENCIES}?apikey=${process.env.APIKEY_CURRENCIES}&currencies=` +
    arr.join("%2C")
  );
};

export { createQueryCurrencies };
