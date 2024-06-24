import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { createTimeUpdate } from "@utils/helpers/createTimeUpdate";
import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const TimeStamp: React.FC<{ timeStamp: number }> = ({ timeStamp }) => {
  const theme = useTheme();

  return (
    <div
      className={
        theme === ThemeMode.DARK
          ? styles.timestamp
          : classNames(styles.timestamp, styles.timestamp_white)
      }>
      <span />
      <span />
      Last updated at {createTimeUpdate(timeStamp)}
    </div>
  );
};

export { TimeStamp };
