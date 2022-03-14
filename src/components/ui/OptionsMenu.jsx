import React from "react";
import CharacterAdd from "../characters/CharacterAdd";
import CharacterAddFavFill from "../characters/CharacterAddFavFill";
import ModaleAddCharacter from "../modals/ModaleAddCharacter";
import FavoritesMenu from "../favorites/FavoritesMenu";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const OptionsMenu = () => {

  const { favoritesOpen } = useSelector(state=>state.ui);

  return (
    <>
      {
        favoritesOpen && <FavoritesMenu />
      }
      {/* ESTE SE PRESENTA OPCIONAL DE ACUERDO A SI ESTA ABIERO O NO */}
      <div className={ `menu__container ${favoritesOpen && 'menu__container-active'}` }>
        <MenuItem option="FAVORITOS" iteme={<CharacterAddFavFill />} />
        <MenuItem option="AGREGAR" iteme={<CharacterAdd />} />
      </div>
      <ModaleAddCharacter />
    </>
  );
};

export default OptionsMenu;
