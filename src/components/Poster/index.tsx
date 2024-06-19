import classNames from "classnames";

import { useTheme } from "@hooks/useTheme";

import { PosterImage } from "./PosterImage";
import { PosterInfo } from "./PosterInfo";

import styles from "./styles.module.scss";

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
