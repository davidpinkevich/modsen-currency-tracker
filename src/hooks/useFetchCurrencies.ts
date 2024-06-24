import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import {
  changeTimeStamp,
  fetchCurrencies,
  getTimeStamp
} from "@redux/slices/sliceMemory";

const useFetchCurrencies = (time: number) => {
  const timeStamp = useAppSelector(getTimeStamp);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeStamp = Date.now();
      const timeDifference = newTimeStamp - timeStamp;
      if (timeDifference >= time) {
        dispatch(changeTimeStamp(newTimeStamp));
        dispatch(fetchCurrencies());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, timeStamp]);

  return { timeStamp };
};

export { useFetchCurrencies };
