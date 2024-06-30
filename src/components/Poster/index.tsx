import classNames from "classnames";

import { useTheme } from "@hooks/useTheme";

import { PosterImage } from "./PosterImage";
import { PosterInfo } from "./PosterInfo";

import styles from "./styles.module.scss";

const Poster: React.FC = () => {
  const darkTheme = useTheme();

  const classPoster = darkTheme
    ? styles.poster
    : classNames(styles.poster, styles.poster_white);

  return (
    <article className={classPoster}>
      <PosterInfo />
      <PosterImage />
    </article>
  );
};

export { Poster };
