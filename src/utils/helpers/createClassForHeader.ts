import classNames from "classnames";

import { ThemeMode } from "@src/constants/themeMode";

function createClassForHeader(
  open: boolean,
  theme: string,
  mainStyle: string,
  mainStyleOpen: string,
  mainStyleWhite: string
) {
  if (open && theme === ThemeMode.DARK) {
    return classNames(mainStyle, mainStyleOpen);
  } else if (open && theme === ThemeMode.WHITE) {
    return classNames(mainStyle, mainStyleWhite, mainStyleOpen);
  } else if (!open && theme === ThemeMode.DARK) {
    return classNames(mainStyle);
  } else if (!open && theme === ThemeMode.WHITE) {
    return classNames(mainStyle, mainStyleWhite);
  }
}

export { createClassForHeader };
