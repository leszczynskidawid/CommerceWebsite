import { initialStateModal } from "./initialStateModal";
import { modalActionTypes } from "./modalAction.Types";

export const modalsReducer = (state = initialStateModal, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: { ...action.modalProps, isOpen: true },
      };
    case modalActionTypes.HIDE_MODAL: {
      return {
        ...state,
        modalProps: { ...action.modalProps, isOpen: false },
      };
    }

    default:
      return state;
  }
};
