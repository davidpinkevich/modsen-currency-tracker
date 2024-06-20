import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Swiper } from "./Swiper";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <Burger />
      <Swiper />
    </header>
  );
};

export { Header };
