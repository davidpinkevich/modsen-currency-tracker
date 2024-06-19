import { useAppSelector } from "@hooks/useRedux";
import { getTheme } from "@redux/slices/sliceMemory";

const useTheme = () => {
  const theme = useAppSelector(getTheme);

  return theme;
};

export { useTheme };
