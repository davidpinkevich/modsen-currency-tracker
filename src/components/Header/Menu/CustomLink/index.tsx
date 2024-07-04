import { Link, useLocation } from "react-router-dom";

import { getLocation } from "@utils/helpers/getLocation";
import { useTheme } from "@hooks/useTheme";
import { changeMenu } from "@redux/slices/sliceTracker";
import { type TypeLinkHeader } from "@src/types";

import styles from "./styles.module.scss";

import { useAppDispatch } from "@src/hooks/useRedux";

const CustomLink: React.FC<TypeLinkHeader> = ({ name, path }) => {
  const createClass = useTheme();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeMenu(false));
  };

  const classCustomLink = createClass(styles.link, styles.link_white);

  return (
    <Link onClick={handleClick} className={classCustomLink} to={path}>
      <p
        className={
          getLocation(pathname) === path
            ? styles.link_name
            : styles.link_name_active
        }>
        {name}
      </p>
    </Link>
  );
};

export { CustomLink };
