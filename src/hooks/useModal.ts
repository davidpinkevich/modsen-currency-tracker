import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { getOpenModal } from "@redux/slices/sliceTracker";

const useModal = (styles: Record<string, string>) => {
  const openModal = useAppSelector(getOpenModal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (openModal) {
      document.body.classList.add(styles.modal_open);
    } else {
      document.body.classList.remove(styles.modal_open);
    }
  }, [openModal]);

  return { openModal, dispatch };
};

export { useModal };
