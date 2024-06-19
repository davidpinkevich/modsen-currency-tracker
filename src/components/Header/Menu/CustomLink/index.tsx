import { Link } from "react-router-dom";
import classNames from "classnames";

import { useTheme } from "@hooks/useTheme";
import { type TypeLinkHeader } from "@src/types";

import styles from "./styles.module.scss";

const CustomLink: React.FC<TypeLinkHeader> = ({ name, path }) => {
  const theme = useTheme();

  return (
    <Link
      className={
        theme === "dark"
          ? styles.link
          : classNames(styles.link, styles.link_white)
      }
      to={path}>
      {name}
    </Link>
  );
};

export { CustomLink };
