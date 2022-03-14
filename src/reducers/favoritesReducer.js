import { types } from "../types/types";
import Swal from "sweetalert2";

const inicialState = {
  favorites: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const favoritesReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.favoriteAddCharacter:
      if (state.favorites.length < 5) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else {
        Swal.fire({
          icon: "info",
          title: "Ten en cuenta",
          text: "Solo se pueden tener 5 personajes favoritos",
          showConfirmButton: true,
        });
        return state;
      }
    case types.favoriteRemoveCharacter:
      return {
        ...state,
        favorites: state.favorites.filter(
          (character) => character.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};
