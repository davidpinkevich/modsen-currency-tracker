import classNames from "classnames";

import img from "@assets/icons/not-found.svg";

import styles from "./styles.module.scss";

import { useTheme } from "@src/hooks/useTheme";

const NotFound: React.FC = () => {
  const createClass = useTheme();

  const classNotFound = createClass(styles.not_found, styles.not_found_white);

  return (
    <div className={classNotFound}>
      <div className={styles.not_found_img}>
        <img src={img} alt="not-found" />
      </div>
      <h2>This path not found!</h2>
    </div>
  );
};

export { NotFound };
