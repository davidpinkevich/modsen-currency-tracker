import { LINKS_HEADER } from "@constants/index";

import { CustomLink } from "./CustomLink";

import styles from "./styles.module.scss";

const Menu: React.FC = () => {
  return (
    <nav className={styles.navigate}>
      {LINKS_HEADER.map((item) => (
        <CustomLink key={item.name} name={item.name} path={item.path} />
      ))}
    </nav>
  );
};

export { Menu };
