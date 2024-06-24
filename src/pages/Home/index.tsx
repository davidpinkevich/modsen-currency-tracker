import { BlockCurrencies } from "@components/BlockCurrencies";
import { Modal } from "@components/Modal";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <BlockCurrencies />
      <Modal />
    </div>
  );
};

export { Home };
