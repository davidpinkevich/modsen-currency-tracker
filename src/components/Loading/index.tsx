import classNames from "classnames";

import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const Loading: React.FC<{ value: string }> = ({ value }) => {
  const darkTheme = useTheme();

  const classLoading = darkTheme
    ? styles.loading
    : classNames(styles.loading, styles.loading_white);

  return (
    <p className={classLoading}>
      {value} <span className={styles.loading_first}></span>
      <span className={styles.loading_second}></span>
      <span className={styles.loading_third}></span>
    </p>
  );
};

export { Loading };
