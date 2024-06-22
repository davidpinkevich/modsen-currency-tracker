import { Outlet } from "react-router-dom";

import { createTimeUpdate } from "@utils/helpers/createTimeUpdate";
import { useFetchCurrencies } from "@hooks/useFetchCurrencies";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Poster } from "@components/Poster";
import { TimeStamp } from "@components/TimeStamp";

import styles from "./styles.module.scss";

const MainLayout: React.FC = () => {
  const { timeStamp } = useFetchCurrencies(20000);

  return (
    <div className={styles.layout}>
      <Header />
      <Poster />
      <TimeStamp timeStamp={timeStamp} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
