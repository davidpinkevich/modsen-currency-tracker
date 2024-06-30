import classNames from "classnames";

import { createTimeUpdate } from "@utils/helpers/createTimeUpdate";
import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const TimeStamp: React.FC<{ timeStamp: number }> = ({ timeStamp }) => {
  const darkTheme = useTheme();

  const classTimeStamp = darkTheme
    ? styles.timestamp
    : classNames(styles.timestamp, styles.timestamp_white);

  return (
    <div className={classTimeStamp}>
      <span />
      <span />
      Last updated at {createTimeUpdate(timeStamp)}
    </div>
  );
};

export { TimeStamp };
