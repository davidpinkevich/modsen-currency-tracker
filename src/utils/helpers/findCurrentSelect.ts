import { type TypeCurrencyItems } from "@src/types";

const findCurrentSelect = (
  data: TypeCurrencyItems,
  value: string
): string | undefined => {
  return data.QUOTES.find((item) => item.iso === value)?.title;
};

export { findCurrentSelect };
