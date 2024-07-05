import classNames from "classnames";

function createClassBurger(
  open: boolean,
  themeDark: boolean,
  mainStyle: string,
  mainStyleOpen: string,
  mainStyleWhite: string
) {
  if (open && themeDark) {
    return classNames(mainStyle, mainStyleOpen);
  } else if (open && !themeDark) {
    return classNames(mainStyle, mainStyleWhite, mainStyleOpen);
  } else if (!open && themeDark) {
    return classNames(mainStyle);
  } else if (!open && !themeDark) {
    return classNames(mainStyle, mainStyleWhite);
  }
}

export { createClassBurger };
