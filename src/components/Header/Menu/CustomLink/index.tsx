import { Link } from "react-router-dom";

import { type TypeLinkHeader } from "@src/types";

import styles from "./styles.module.scss";

const CustomLink: React.FC<TypeLinkHeader> = ({ name, path }) => {
  return (
    <Link className={styles.link} to={path}>
      {name}
    </Link>
  );
};

export { CustomLink };
