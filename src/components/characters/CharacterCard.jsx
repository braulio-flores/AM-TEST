import React from "react";
import { capitalizeF } from "../../helpers/capitalieFirstLetter";
import CharacterAddFav from "./CharacterAddFav";

const CharacterCard = ({ character }) => {
  const {
    name,
    image,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
    house,
    alive,
    hogwartsStudent,
    hogwartsStaff,
  } = character;

  // console.log(character);

  return (
    <div className={`character__card ${!alive && "characters__deat"}`}>
      <div className={`character__card-img characters__${house}`}>
        <div className="character__card-img-container">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="character__card-content">
        <p className="character__card-content-state-1">
          {alive ? "VIVO" : "FINADO"} / {hogwartsStudent && "ESTUDIANTE"}{" "}
          {hogwartsStaff && "STAFF"}
          <CharacterAddFav character={character} />
        </p>
        <p className="character__card-content-name">
          {!alive && "+ "}
          {name}
        </p>
        <p className="character__card-content-state-2">
          {alive ? "VIVO" : "FINADO"} <br /> {hogwartsStudent && "ESTUDIANTE"}{" "}
          {hogwartsStaff && "STAFF"} <CharacterAddFav character={character} />
        </p>
        <p className="character__card-content-info">
          <b>Cumpleaños:</b> {dateOfBirth === "" ? "-- -- ---" : dateOfBirth}{" "}
          <br />
          <b>Genero:</b> {capitalizeF(gender)} <br />
          <b>Color de Ojos:</b> {capitalizeF(eyeColour)} <br />
          <b>Color de Pelo:</b> {capitalizeF(hairColour)} <br />
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
