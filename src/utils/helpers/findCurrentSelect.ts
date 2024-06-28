import { type TypeCurrencyItems } from "@src/types";

const findCurrentSelect = (
  data: Array<{ title: string; iso: string }>,
  value: string
): string | undefined => {
  return data.find((item) => item.iso === value)?.title;
};

export { findCurrentSelect };
