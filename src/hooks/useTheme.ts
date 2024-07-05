import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { useAppSelector } from "@hooks/useRedux";
import { getTheme } from "@redux/slices/sliceMemory";

const useTheme = () => {
  const dark = useAppSelector(getTheme);

  return (baseClass: string, ...white: string[]) => {
    return dark === ThemeMode.DARK
      ? baseClass
      : classNames(baseClass, ...white);
  };
};

export { useTheme };
