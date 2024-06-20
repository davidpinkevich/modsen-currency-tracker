import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { getLocation } from "@utils/helpers/getLocation";
import { useTheme } from "@hooks/useTheme";
import { type TypeLinkHeader } from "@src/types";

import styles from "./styles.module.scss";

const CustomLink: React.FC<TypeLinkHeader> = ({ name, path }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Link
      className={
        theme === ThemeMode.dark
          ? styles.link
          : classNames(styles.link, styles.link_white)
      }
      to={path}>
      <p
        className={
          getLocation(pathname) === path
            ? styles.link_name
            : styles.link_name_active
        }>
        {name}
      </p>
    </Link>
  );
};

export { CustomLink };
