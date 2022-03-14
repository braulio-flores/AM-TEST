import Modal from "react-modal";
import React from "react";
import ModaleClose from "./ModaleClose";

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
  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileSelector = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`file`, file);
    } else {
      console.log("No file");
    }
  };

  return (
    <Modal
      isOpen={true}
      //   onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <div className="modal__main-container">
        <div className="modal__form-title">
          <p> Agregar un personaje </p>
          <ModaleClose />
        </div>

        <form className="modale__form-container">
          <div className="modale__form-group">
            <label>NOMBRE</label>
            <input type="text" className="modale__form-control-text" />
          </div>

          <div className="modale__form-group">
            <label>CUMPLEAÑOS</label>
            <input type="text" className="modale__form-control-text" />
          </div>

          <div className="modale__form-group">
            <label>COLOR DE OJOS</label>
            <input type="text" className="modale__form-control-text" />
          </div>

          <div className="modale__form-group">
            <label>COLOR DE PELO</label>
            <input type="text" className="modale__form-control-text" />
          </div>

          <div className="modale__form-group">
            <label>GENERO</label>
            <div className="modale__form-group-radios">
              <label>
                <input type="radio" className="form-control" /> Mujer
              </label>
              <label>
                <input type="radio" className="form-control" /> Hombre
              </label>
            </div>
          </div>

          <div className="modale__form-group">
            <label>POSICIÓN</label>
            <div className="modale__form-group-radios">
              <label>
                <input type="radio" className="form-control" /> Estudiante
              </label>
              <label>
                <input type="radio" className="form-control" /> Staff
              </label>
            </div>
          </div>

          <div className="modale__form-group modale__form-upload-responsive">
            <div className="modale__form-group-file">
              <label
                className="modale__form-upload-icon"
                onClick={handlePictureUpload}
              >
                FOTOGRAFIA
              </label>
              <input
                type="file"
                name=""
                style={{ display: "none" }}
                onChange={handleFileSelector}
                id="fileSelector"
              />
              <i
                className="fas fa-solid fa-upload modale__form-upload-icon"
                onClick={handlePictureUpload}
              ></i>
            </div>
          </div>

          <button
            type="submit"
            className="button__btn-filter modal__form-submit"
          >
            <span>GUARDAR</span>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModaleAddCharacter;
