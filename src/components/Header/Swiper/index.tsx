import classNames from "classnames";

import { useAppDispatch } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import { changeTheme } from "@redux/slices/sliceMemory";

import styles from "./styles.module.scss";

const Swiper: React.FC = () => {
  const dispatch = useAppDispatch();
  const darkTheme = useTheme();

  const handleButton = () => {
    dispatch(changeTheme());
  };

  const classSwiper = darkTheme
    ? styles.swiper
    : classNames(styles.swiper, styles.swiper_white);

  const classSwiperBtn = darkTheme
    ? styles.swiper_button
    : classNames(styles.swiper_button, styles.swiper_button_white);

  return (
    <button data-testcy="swiper" onClick={handleButton} className={classSwiper}>
      <div className={classSwiperBtn} />
    </button>
  );
};

export { Swiper };
