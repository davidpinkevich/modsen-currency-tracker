import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from "react-redux";

import { type AppDispatch, type RootState } from "@redux/store";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
