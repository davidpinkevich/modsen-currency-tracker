import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { useAppDispatch } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import { changeTheme } from "@redux/slices/sliceMemory";

import styles from "./styles.module.scss";

const Swiper: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleButton = () => {
    dispatch(changeTheme());
  };
  return (
    <button
      onClick={handleButton}
      className={
        theme === ThemeMode.DARK
          ? styles.swiper
          : classNames(styles.swiper, styles.swiper_white)
      }>
      <div
        className={
          theme === ThemeMode.DARK
            ? styles.swiper_button
            : classNames(styles.swiper_button, styles.swiper_button_white)
        }
      />
    </button>
  );
};

export { Swiper };
