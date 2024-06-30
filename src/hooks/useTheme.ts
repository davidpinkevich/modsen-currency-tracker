import { ThemeMode } from "@constants/themeMode";
import { useAppSelector } from "@hooks/useRedux";
import { getTheme } from "@redux/slices/sliceMemory";

const useTheme = () => {
  const dark = useAppSelector(getTheme);

  return dark === ThemeMode.DARK;
};

export { useTheme };
