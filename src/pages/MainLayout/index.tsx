import { Outlet } from "react-router-dom";

import { useFetchCurrencies } from "@hooks/useFetchCurrencies";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Poster } from "@components/Poster";
import { TimeStamp } from "@components/TimeStamp";

import styles from "./styles.module.scss";

const MainLayout: React.FC = () => {
  const { timeStamp } = useFetchCurrencies(86400000);

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
