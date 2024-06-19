import { FooterAbout } from "./FooterAbout";
import { FooterCopyright } from "./FooterCopyright";
import { FooterNav } from "./FooterNav";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        <FooterAbout />
        <FooterNav />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export { Footer };
