import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import { changeMenu, getOpenMenu } from "@redux/slices/sliceTracker";

import { createClassBurger } from "./createClassBurger";

import styles from "./styles.module.scss";

const Burger: React.FC = () => {
  const themeDark = useTheme();
  const open = useAppSelector(getOpenMenu);
  const dispatch = useAppDispatch();

  const handleButton = () => {
    dispatch(changeMenu(!open));
  };

  return (
    <button
      className={createClassBurger(
        open,
        themeDark,
        styles.burger,
        styles.burger_open,
        styles.burger_white
      )}
      onClick={handleButton}>
      <span
        className={createClassBurger(
          open,
          themeDark,
          styles.burger_span,
          styles.burger_span_open,
          styles.burger_span_white
        )}></span>
    </button>
  );
};

export { Burger };
