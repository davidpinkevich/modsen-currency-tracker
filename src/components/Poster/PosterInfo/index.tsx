import styles from "./styles.module.scss";

const PosterInfo: React.FC = () => {
  return (
    <div className={styles.poster_info}>
      <h1 className={styles.poster_info_title}>Modsen Currency Tracker</h1>
      <p className={styles.poster_info_describe}>
        Quotes for the dollar and other international currencies.
      </p>
    </div>
  );
};

export { PosterInfo };
