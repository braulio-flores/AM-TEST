import React from "react";
import CharacterAddFav from "./CharacterAddFav";

const CharacterCard = () => {
  return (
    <div className="character__card">
      <div className="character__card-img characters__slytherin">
        <div className="character__card-img-container">
          <img
            src="http://hp-api.herokuapp.com/images/harry.jpg"
            alt="Imagen de la Monalisa"
          />
        </div>
      </div>
      <div className="character__card-content">
        <p className="character__card-content-state-1">
          VIVO / ESTUDIANTE
          <CharacterAddFav />
        </p>
        <p className="character__card-content-name">
            Jack Russell terrier
        </p>
        <p className="character__card-content-state-2">
          VIVO <br /> ESTUDIANTE <CharacterAddFav />
        </p>
        <p className="character__card-content-info">
          <b>Cumpleaños:</b> 31-07-1980 <br />
          <b>Genero:</b> Male <br />
          <b>Color de Ojos:</b> Green <br />
          <b>Color de Pelo:</b> Black <br />
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
