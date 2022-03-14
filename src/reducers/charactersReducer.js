import { types } from "../types/types";

const inicialState = {
  data: require("../assets/hp-characters.json"),
  loading: false,
};

export const charactersReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.charactersSetCharacters:
        return {
            ...state,
            data: action.payload,
            loading: false
        }
    case types.charactersSetLoadingTrue:
      return {
        ...state,
        loading: true,
      };
    case types.charactersSetLoadingFalse:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
