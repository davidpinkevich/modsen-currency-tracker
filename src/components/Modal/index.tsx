import classNames from "classnames";

import { useModal } from "@hooks/useModal";
import cross from "@assets/icons/cross.svg";
import { changeModal } from "@redux/slices/sliceTracker";

import { Conversion } from "./Conversion";

import styles from "./styles.module.scss";

import { ThemeMode } from "@src/constants/themeMode";

const Modal = () => {
  const { theme, openModal, dispatch } = useModal(styles);

  const handleModalShadow = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains(styles.modal)) {
      dispatch(changeModal());
    }
  };

  const handleButton = () => {
    dispatch(changeModal());
  };

  return (
    <>
      {openModal && (
        <div onClick={handleModalShadow} className={styles.modal}>
          <div
            className={
              theme === ThemeMode.DARK
                ? styles.modal_block
                : classNames(styles.modal_block, styles.modal_block_white)
            }>
            <button onClick={handleButton}>
              <img src={cross} alt="close" />
            </button>
            <Conversion />
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
