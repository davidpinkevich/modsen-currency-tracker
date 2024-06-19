import classNames from "classnames";

import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const PosterInfo: React.FC = () => {
  const theme = useTheme();

  return (
    <div className={styles.poster_info}>
      <h1 className={styles.poster_info_title}>Modsen Currency Tracker</h1>
      <p
        className={
          theme === "dark"
            ? styles.poster_info_describe
            : classNames(
                styles.poster_info_describe,
                styles.poster_info_describe_white
              )
        }>
        Quotes for the dollar and other international currencies.
      </p>
    </div>
  );
};

export { PosterInfo };
