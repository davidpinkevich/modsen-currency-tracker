import classNames from "classnames";

import { useAppDispatch } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import { changeTheme } from "@redux/slices/sliceMemory";

import styles from "./styles.module.scss";

const Swiper: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handlerButton = () => {
    dispatch(changeTheme());
  };
  return (
    <button
      onClick={handlerButton}
      className={
        theme === "dark"
          ? styles.swiper
          : classNames(styles.swiper, styles.swiper_white)
      }>
      <div
        className={
          theme === "dark"
            ? styles.swiper_button
            : classNames(styles.swiper_button, styles.swiper_button_white)
        }
      />
    </button>
  );
};

export { Swiper };
