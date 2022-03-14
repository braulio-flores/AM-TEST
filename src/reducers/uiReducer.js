import { types } from "../types/types";

const inicialState = {
  modalOpen: false,
  favoritesOpen: false,
};

export const uiReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
        favoritesOpen: false,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
    case types.uiOpenFavsMenu:
      return {
        ...state,
        favoritesOpen: !state.favoritesOpen,
      };
    case types.uiCloseFavsMenu:
      return {
        ...state,
        favoritesOpen: false,
      };
    default:
      return state;
  }
};
