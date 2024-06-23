import classNames from "classnames";

import { ThemeMode } from "@src/constants/themeMode";

function createClassForMenu(
  open: boolean,
  theme: string,
  mainStyle: string,
  mainStyleOpen: string,
  mainStyleWhite: string
) {
  if (open && theme === ThemeMode.dark) {
    return classNames(mainStyle, mainStyleOpen);
  } else if (open && theme === ThemeMode.white) {
    return classNames(mainStyle, mainStyleWhite, mainStyleOpen);
  } else if (!open && theme === ThemeMode.dark) {
    return classNames(mainStyle);
  } else if (!open && theme === ThemeMode.white) {
    return classNames(mainStyle, mainStyleWhite);
  }
}

export { createClassForMenu };
