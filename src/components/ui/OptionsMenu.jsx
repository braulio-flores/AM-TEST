import React from "react";
import CharacterAdd from "../characters/CharacterAdd";
import CharacterAddFavFill from "../characters/CharacterAddFavFill";
import ModaleAddCharacter from "../modals/ModaleAddCharacter";
// import FavoritesMenu from "../favorites/FavoritesMenu";
import MenuItem from "./MenuItem";

const OptionsMenu = () => {
  return (
    <>
      {/* <FavoritesMenu /> */}
      {/* ESTE SE PRESENTA OPCIONAL DE ACUERDO A SI ESTA ABIERO O NO */}
      <div className="menu__container">
        <MenuItem option="FAVORITOS" iteme={<CharacterAddFavFill />} />
        <MenuItem option="AGREGAR" iteme={<CharacterAdd />} />
      </div>
      <ModaleAddCharacter />
    </>
  );
};

export default OptionsMenu;
