import classNames from "classnames";

import { useTheme } from "@hooks/useTheme";

import styles from "./styles.module.scss";

const BlockContacts: React.FC = () => {
  const darkTheme = useTheme();

  const classBlockContacts = darkTheme
    ? styles.contacts
    : classNames(styles.contacts, styles.contacts_white);

  return (
    <ul className={classBlockContacts}>
      <li>
        <h2>Numbers:</h2>
        <p>
          Office: <span>+356 (56) 678 22 11</span>
        </p>
        <p>
          Supports: <span>+356 (56) 565 39 09</span>
        </p>
        <p>
          Services: <span>+356 (56) 765 38 76</span>
        </p>
      </li>
      <li>
        <h2>Mails:</h2>
        <p>
          Office: <span>currency-tracker@gmail.com</span>
        </p>
        <p>
          Supports: <span>currency-supports@gmail.com</span>
        </p>
        <p>
          Services: <span>currency-services@gmail.com</span>
        </p>
      </li>
    </ul>
  );
};

export { BlockContacts };
