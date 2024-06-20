import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { changeMenu, getOpenMenu } from "@redux/slices/sliceTracker";

import styles from "./styles.module.scss";

const Burger: React.FC = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(getOpenMenu);

  const handlerButton = () => {
    dispatch(changeMenu());
  };

  return (
    <button
      className={
        open ? classNames(styles.burger, styles.burger_open) : styles.burger
      }
      onClick={handlerButton}>
      <span
        className={
          open
            ? classNames(styles.burger_span, styles.burger_span_open)
            : styles.burger_span
        }></span>
    </button>
  );
};

export { Burger };
