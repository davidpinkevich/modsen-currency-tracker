import image from "@assets/icons/error.svg";

import styles from "./styles.module.scss";

const Fallback: React.FC<{ logger: string }> = ({ logger }) => {
  return (
    <div className={styles.fallback}>
      <img src={image} alt="error" />
      <div>
        <h2>Something is wrong!</h2>
        <p>{logger}</p>
      </div>
    </div>
  );
};

export { Fallback };
