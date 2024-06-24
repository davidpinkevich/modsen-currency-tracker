import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { getOpenModal } from "@redux/slices/sliceTracker";

import { useTheme } from "./useTheme";

const useModal = (styles: Record<string, string>) => {
  const theme = useTheme();
  const openModal = useAppSelector(getOpenModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openModal) {
      document.body.classList.add(styles.modal_open);
    } else {
      document.body.classList.remove(styles.modal_open);
    }
  }, [openModal]);

  return { theme, openModal, dispatch };
};

export { useModal };
