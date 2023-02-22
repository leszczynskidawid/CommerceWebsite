import { modalActionTypes } from "./modalAction.Types";

export const openModalWindow = (modalProps, modalType) => ({
  type: modalActionTypes.SHOW_MODAL,
  modalProps,
  modalType,
});
export const closeModalWindow = () => ({
  type: modalActionTypes.HIDE_MODAL,
});
