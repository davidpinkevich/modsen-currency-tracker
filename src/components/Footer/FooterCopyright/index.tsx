import classNames from "classnames";

import styles from "./styles.module.scss";

import { useTheme } from "@src/hooks/useTheme";

const FooterCopyright: React.FC = () => {
  const theme = useTheme();

  return (
    <p
      className={
        theme === "dark"
          ? styles.copy
          : classNames(styles.copy, styles.copy_white)
      }>
      Startsup © 2023-2024, All Rights Reserved
    </p>
  );
};

export { FooterCopyright };
