import { BlockCurrencies } from "@components/BlockCurrencies";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <BlockCurrencies />
    </div>
  );
};

export { Home };
