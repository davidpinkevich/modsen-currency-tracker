import { useEffect, useState } from "react";

import { sliceConversion } from "@utils/helpers/getConversion";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import { getDataCurrencies } from "@redux/slices/sliceMemory";
import { getConversionISO } from "@redux/slices/sliceTracker";

const useConversion = () => {
  const theme = useTheme();
  const data = useAppSelector(getDataCurrencies);
  const conversionISO = useAppSelector(getConversionISO);
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    function convertCurrency(from: string, to: string, amount: string): string {
      if (from === to) {
        return amount;
      }
      if (data && from && to && input.length) {
        const fromValue = data[from].value;
        const toValue = data[to].value;
        return sliceConversion(amount, fromValue, toValue);
      }
      return "";
    }
    setResult(convertCurrency(conversionISO.from, conversionISO.to, input));
  }, [input, conversionISO.to]);

  return { input, setInput, result, dispatch, conversionISO, theme };
};

export { useConversion };
