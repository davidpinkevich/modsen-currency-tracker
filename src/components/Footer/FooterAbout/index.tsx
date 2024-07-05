import { useTheme } from "@hooks/useTheme";
import graph from "@assets/icons/graph.svg";

import styles from "./styles.module.scss";

const FooterAbout: React.FC = () => {
  const createClass = useTheme();

  const classFooterAbout = createClass(
    styles.footer_about,
    styles.footer_about_white
  );

  return (
    <div className={classFooterAbout}>
      <div className={styles.footer_about_title}>
        <img src={graph} alt="graph" />
        <h2>Modsen Currency Tracker</h2>
      </div>
      <p>
        Since then, the company has grown organically to. Starsup is the world's
        largest trading platform, with $12 billion worth of currency trading and
        500,000 tickets sold daily to tens of thousands of traders worldwide.
      </p>
    </div>
  );
};

export { FooterAbout };
