import classNames from "classnames";

import styles from "./styles.module.scss";

import { useTheme } from "@src/hooks/useTheme";

const FooterNav: React.FC = () => {
  const darkTheme = useTheme();

  const classFooterNav = darkTheme
    ? styles.footer_nav
    : classNames(styles.footer_nav, styles.footer_nav_white);

  return (
    <ul className={classFooterNav}>
      <li>
        <h2>General</h2>
        <p>Market</p>
        <p>Service</p>
      </li>
      <li>
        <h2>Product</h2>
        <p>Sparks</p>
        <p>Snaps</p>
      </li>
      <li>
        <h2>Community</h2>
        <p>Ideas</p>
        <p>Streams</p>
      </li>
    </ul>
  );
};

export { FooterNav };
