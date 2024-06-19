import { PosterImage } from "./PosterImage";
import { PosterInfo } from "./PosterInfo";

import styles from "./styles.module.scss";

import { useTheme } from "@hooks/useTheme";
import classNames from "classnames";

const Poster: React.FC = () => {
  const theme = useTheme();
  return (
    <article
      className={
        theme === "dark"
          ? styles.poster
          : classNames(styles.poster, styles.poster_white)
      }>
      <PosterInfo />
      <PosterImage />
    </article>
  );
};

export { Poster };
