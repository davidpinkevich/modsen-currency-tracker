import classNames from "classnames";

import styles from "./styles.module.scss";

import { useTheme } from "@src/hooks/useTheme";

const FooterCopyright: React.FC = () => {
  const darkTheme = useTheme();

  const classFooterCopyright = darkTheme
    ? styles.copy
    : classNames(styles.copy, styles.copy_white);

  return (
    <p className={classFooterCopyright}>
      Startsup © 2023-2024, All Rights Reserved
    </p>
  );
};

export { FooterCopyright };
