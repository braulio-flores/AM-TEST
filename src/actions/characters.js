import Swal from "sweetalert2";

import { postData } from "../helpers/addCharacter";
import { fileUpload } from "../helpers/fileUpload";
import { formatToAddCharacter } from "../helpers/formatToAddCharacter";
import { getCharacters } from "../helpers/getCharacters";
import { types } from "../types/types";

export const startSetCharacters = (filter) => {
  return async (dispatch) => {
    dispatch(charactersLoadingTrue());
    await getCharacters()
      .then((res) => {
        dispatch(setCharacters(res, filter));
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(charactersLoadingFalse());
  };
};

export const setCharacters = (characters, filter) => {
  let result;

  switch (filter) {
    case "ESTUDIANTES":
      result = characters.filter(
        (character) => character.hogwartsStudent === true
      );
      break;
    case "STAFF":
      result = characters.filter(
        (character) => character.hogwartsStaff === true
      );
      break;
    default:
      result = characters;
      break;
  }

  return {
    type: types.charactersSetCharacters,
    payload: result,
  };
};

export const charactersLoadingTrue = () => {
  return {
    type: types.charactersSetLoadingTrue,
  };
};

export const charactersLoadingFalse = () => {
  return {
    type: types.charactersSetLoadingFalse,
  };
};

// ACTION PARA CUANDO SE VA A AGREGAR UN NUEVO PERSONAJE
export const startAddingNewCharacter = (valuesForm, file) => {
  // LO PRIMERO QUE QUIERO HACER ES SUBIR LA IMAGEN A CLOUDINARY PARA PODER TENER SU URL
  return async (dispatch) => {
    Swal.fire({
      title: "Añadiendo Personaje",
      text: "Por favor espere...",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,

      // onBeforeOpen: () => {
      //   Swal.showLoading();
      // },
    });

    if (!file) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Sube una imagen con formato correcto',
      })
      return ;
    }

    const fileUrl = await fileUpload(file);

    const valuesWithURL = {
      ...valuesForm,
      archivo: fileUrl,
    };

    dispatch(addingNewCharacterJS(valuesWithURL));
  };
};

const addingNewCharacterJS = (valuesForm) => {
  return async (dispatch, useSelector) => {

    const filter = useSelector(state=>state);

    // // ESTO ME DA EL FORMATO PARA QUE TODOS TENGAN UNA MISMA LOGICA
    const dataForm = formatToAddCharacter(valuesForm);


    //AQUI GENERO LA PETICION PARA HACER EL POST AL JSON SERVE
    await postData(dataForm).then((data) => {
      // console.log(data);
    });

    dispatch(startSetCharacters(filter));
    // console.log(valuesForm);
    Swal.close();

    Swal.fire({
      icon: 'success',
      title: 'Personaje Agregado',
      showConfirmButton: true,
    })
  };
};


