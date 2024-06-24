interface CurrencyRate {
  code: string;
  value: number;
}

export type TypeDataCurrency = Record<string, CurrencyRate>;
