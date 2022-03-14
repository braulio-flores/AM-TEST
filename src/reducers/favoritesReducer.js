import { types } from "../types/types";

const inicialState = {
  favorites: JSON.parse(localStorage.getItem('favorite')) || [],
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
        return state;
      }
    case types.favoriteRemoveCharacter:
        return {
            ...state,
            favorites: state.favorites.filter(character => character.name !== action.payload.name)
            
        }
    default:
      return state;
  }
};
