import Modal from "react-modal";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { closeModal } from "../../actions/ui";
import ModalForm from "./ModalForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModaleAddCharacter = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);


  const closeM = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={modalOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeM}
      style={customStyles}
      closeTimeoutMS={300}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <ModalForm closeM={closeM}/>
    </Modal>
  );
};

export default ModaleAddCharacter;
