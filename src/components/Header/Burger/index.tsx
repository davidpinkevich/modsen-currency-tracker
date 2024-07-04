import { ThemeMode } from "@constants/themeMode";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { getTheme } from "@redux/slices/sliceMemory";
import { changeMenu, getOpenMenu } from "@redux/slices/sliceTracker";

import { createClassBurger } from "./createClassBurger";

import styles from "./styles.module.scss";

const Burger: React.FC = () => {
  const darkTheme = useAppSelector(getTheme);
  const open = useAppSelector(getOpenMenu);
  const dispatch = useAppDispatch();

  const handleButton = () => {
    dispatch(changeMenu(!open));
  };

  const currentTheme = darkTheme === ThemeMode.DARK;

  return (
    <button
      className={createClassBurger(
        open,
        currentTheme,
        styles.burger,
        styles.burger_open,
        styles.burger_white
      )}
      onClick={handleButton}>
      <span
        className={createClassBurger(
          open,
          currentTheme,
          styles.burger_span,
          styles.burger_span_open,
          styles.burger_span_white
        )}></span>
    </button>
  );
};

export { Burger };
