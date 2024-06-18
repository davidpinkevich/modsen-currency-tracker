import { PosterInfo } from "./PosterInfo";
import { PosterImage } from "./PosterImage";

import styles from "./styles.module.scss";

const Poster: React.FC = () => {
  return (
    <article className={styles.poster}>
      <PosterInfo />
      <PosterImage />
    </article>
  );
};

export { Poster };
