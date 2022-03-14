import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startAddingNewCharacter } from "../../actions/characters";
import { useForm } from "../../hooks/useForms";
import ModaleClose from "./ModaleClose";

const ModalForm = ({ closeM }) => {
  const dispatch = useDispatch();

  const { valuesForm, handleInputChange, reset } = useForm({
    nombre: "",
    cumpleaños: "",
    colorDeOjos: "",
    colorDePelo: "",
    genero: "",
    posicion: "",
  });

  const {
    nombre,
    cumpleaños,
    colorDeOjos,
    colorDePelo,
  } = valuesForm;

  const [file, setFile] = useState('');
  

  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileSelector = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    } else {
      console.log("No file");
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    
    dispatch(startAddingNewCharacter(valuesForm, file ));

    reset();
    closeM();
    
  };

  return (
    <div className="modal__main-container">
      <div className="modal__form-title">
        <p> Agregar un personaje </p>
        <ModaleClose />
      </div>

      <form className="modale__form-container" onSubmit={handleSubmitForm}>
        <div className="modale__form-group">
          <label>NOMBRE</label>
          <input
            type="text"
            className="modale__form-control-text"
            name="nombre"
            onChange={handleInputChange}
            value={nombre}
            required
          />
        </div>

        <div className="modale__form-group">
          <label>CUMPLEAÑOS</label>
          <input
            type="text"
            className="modale__form-control-text"
            name="cumpleaños"
            onChange={handleInputChange}
            value={cumpleaños}
            required
          />
        </div>

        <div className="modale__form-group">
          <label>COLOR DE OJOS</label>
          <input
            type="text"
            className="modale__form-control-text"
            name="colorDeOjos"
            onChange={handleInputChange}
            value={colorDeOjos}
            required
          />
        </div>

        <div className="modale__form-group">
          <label>COLOR DE PELO</label>
          <input
            type="text"
            className="modale__form-control-text"
            name="colorDePelo"
            onChange={handleInputChange}
            value={colorDePelo}
            required
          />
        </div>

        <div className="modale__form-group">
          <label>GENERO</label>
          <div className="modale__form-group-radios">
            <label>
              <input
                type="radio"
                name="genero"
                className="form-control"
                onChange={handleInputChange}
                value="MUJER"
              />{" "}
              Mujer
            </label>
            <label>
              <input
                type="radio"
                name="genero"
                className="form-control"
                onChange={handleInputChange}
                value="HOMBRE"
                required
              />{" "}
              Hombre
            </label>
          </div>
        </div>

        <div className="modale__form-group">
          <label>POSICIÓN</label>
          <div className="modale__form-group-radios">
            <label>
              <input
                type="radio"
                name="posicion"
                className="form-control"
                onChange={handleInputChange}
                value="ESTUDIANTE"
                required
              />{" "}
              Estudiante
            </label>
            <label>
              <input
                type="radio"
                name="posicion"
                className="form-control"
                onChange={handleInputChange}
                value="STAFF"
              />{" "}
              Staff
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
              name="archivo"
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

        <button type="submit" className="button__btn-filter modal__form-submit">
          <span>GUARDAR</span>
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
