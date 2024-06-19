import { Outlet } from "react-router-dom";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Poster } from "@components/Poster";

import styles from "./styles.module.scss";

const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Poster />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
