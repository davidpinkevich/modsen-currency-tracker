import classNames from "classnames";

import { LINKS_HEADER } from "@constants/index";
import { useAppSelector } from "@hooks/useRedux";
import { getOpenMenu } from "@redux/slices/sliceTracker";

import { CustomLink } from "./CustomLink";

import styles from "./styles.module.scss";

const Menu: React.FC = () => {
  const openMenu = useAppSelector(getOpenMenu);

  return (
    <nav
      className={
        openMenu
          ? classNames(styles.navigate, styles.navigate_open)
          : styles.navigate
      }>
      {LINKS_HEADER.map((item) => (
        <CustomLink key={item.name} name={item.name} path={item.path} />
      ))}
    </nav>
  );
};

export { Menu };
