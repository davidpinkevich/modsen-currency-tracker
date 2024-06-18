import { Link } from "react-router-dom";

import logo from "@assets/icons/graph.svg";

import styles from "./styles.module.scss";

const Logo: React.FC = () => {
  return (
    <Link className={styles.logo} to={"/"}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export { Logo };
