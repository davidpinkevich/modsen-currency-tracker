const getConversion = (value: string) => {
  const res = value.replace(/[^0-9]/g, "");
  return res.slice(0, 9);
};

const sliceConversion = (
  amount: string,
  fromValue: number,
  toValue: number
): string => {
  const result = (Number(amount) / fromValue) * toValue;

  return result > 1 ? result.toFixed(2) : result.toFixed(6);
};

export { getConversion, sliceConversion };
