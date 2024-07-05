import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const FooterNav: React.FC = () => {
  const createClass = useTheme();

  const classFooterNav = createClass(
    styles.footer_nav,
    styles.footer_nav_white
  );

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
