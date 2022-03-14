import React from "react";
import CharacterCard from "./CharacterCard";

let characters = require("../../assets/hp-characters.json");

const CharactersContainer = () => {
  return (
    <div className="characters__container">
      {characters.map((character) => {
        return <CharacterCard key={ character.name } character={ character } />;
      })}
    </div>
  );
};

export default CharactersContainer;
