import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSetCharacters } from "../../actions/characters";
import CharacterCard from "./CharacterCard";
import Swal from "sweetalert2";

const CharactersContainer = () => {
  const { filter } = useSelector((state) => state.filter);
  const { data: characters } = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  useEffect(() => {
    Swal.fire({
      title: "Cargando Personajes",
      text: "Por favor espere...",
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: false,

      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
      dispatch(startSetCharacters(filter));
    Swal.close();
  }, [filter, dispatch]);

  return (
    <div className="characters__container">
      {characters.map((character, i) => {
        return <CharacterCard key={i} character={character} />;
      })}
    </div>
  );
};

export default CharactersContainer;
