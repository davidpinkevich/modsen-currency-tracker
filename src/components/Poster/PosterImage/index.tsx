import graph from "@assets/icons/graph.svg";

import styles from "./styles.module.scss";

const PosterImage: React.FC = () => {
  return (
    <div className={styles.poster_image}>
      <img src={graph} alt="graph" />
    </div>
  );
};

export { PosterImage };
