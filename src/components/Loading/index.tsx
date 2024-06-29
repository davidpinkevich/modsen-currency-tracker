import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const Loading: React.FC<{ value: string }> = ({ value }) => {
  const theme = useTheme();

  return (
    <p
      className={
        theme === ThemeMode.DARK
          ? styles.loading
          : classNames(styles.loading, styles.loading_white)
      }>
      {value} <span className={styles.loading_first}></span>
      <span className={styles.loading_second}></span>
      <span className={styles.loading_third}></span>
    </p>
  );
};

export { Loading };
