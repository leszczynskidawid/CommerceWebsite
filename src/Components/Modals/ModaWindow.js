import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModalWindow } from "../../Redux/ModalState/actionModal";
import { ModalDelete } from "./ModalDelete";
import CloseIcon from "@mui/icons-material/Close";

export const ModalTypes = ({ modalType, modalProps, close }) => {
  switch (modalType) {
    case "delete":
      return <ModalDelete modalProps={modalProps} close={close} />;

    default:
      return null;
  }
};

export const ModalWindow = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "300px",
      height: "200px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
    },
  };

  Modal.setAppElement("body");
  const { modalType, modalProps } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={modalProps.isOpen}
      onRequestClose={() => dispatch(closeModalWindow())}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: "2px", right: "2px" }}>
          <CloseIcon onClick={() => dispatch(closeModalWindow())} />
        </div>
        <ModalTypes
          modalType={modalType}
          modalProps={modalProps}
          close={() => dispatch(closeModalWindow())}
        />
      </div>
    </Modal>
  );
};
