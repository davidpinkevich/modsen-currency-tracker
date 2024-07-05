import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const PosterInfo: React.FC = () => {
  const createClass = useTheme();

  const classPosterInfo = createClass(
    styles.poster_info_describe,
    styles.poster_info_describe_white
  );

  return (
    <div className={styles.poster_info}>
      <h1 className={styles.poster_info_title}>Modsen Currency Tracker</h1>
      <p className={classPosterInfo}>
        Quotes for the dollar and other international currencies.
      </p>
    </div>
  );
};

export { PosterInfo };
