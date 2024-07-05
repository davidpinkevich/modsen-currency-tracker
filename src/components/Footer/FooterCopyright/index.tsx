import styles from "./styles.module.scss";

import { useTheme } from "@src/hooks/useTheme";

const FooterCopyright: React.FC = () => {
  const createClass = useTheme();

  const classFooterCopyright = createClass(styles.copy, styles.copy_white);

  return (
    <p className={classFooterCopyright}>
      Startsup © 2023-2024, All Rights Reserved
    </p>
  );
};

export { FooterCopyright };
