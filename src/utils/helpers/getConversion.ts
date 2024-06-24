import { ROUNDING_CONVERSION } from "@constants/index";

const getConversion = (value: string) => {
  const res = value.replace(/[^0-9]/g, "");
  return res.slice(0, ROUNDING_CONVERSION.VIEW_RESULT);
};

const sliceConversion = (
  amount: string,
  fromValue: number,
  toValue: number
): string => {
  const result = (Number(amount) / fromValue) * toValue;

  return result > ROUNDING_CONVERSION.MIN_VALUE
    ? result.toFixed(ROUNDING_CONVERSION.SLICE_MIN)
    : result.toFixed(ROUNDING_CONVERSION.SLICE_MAX);
};

export { getConversion, sliceConversion };
