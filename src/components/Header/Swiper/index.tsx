import { useAppDispatch } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import { changeTheme } from "@redux/slices/sliceMemory";

import styles from "./styles.module.scss";

const Swiper: React.FC = () => {
  const dispatch = useAppDispatch();
  const createClass = useTheme();

  const handleButton = () => {
    dispatch(changeTheme());
  };

  const classSwiper = createClass(styles.swiper, styles.swiper_white);

  const classSwiperBtn = createClass(
    styles.swiper_button,
    styles.swiper_button_white
  );

  return (
    <button onClick={handleButton} className={classSwiper}>
      <div className={classSwiperBtn} />
    </button>
  );
};

export { Swiper };
