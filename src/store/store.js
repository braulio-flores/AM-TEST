import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { charactersReducer } from "../reducers/charactersReducer";
import { favoritesReducer } from "../reducers/favoritesReducer";
import { filterReducer } from "../reducers/filterReducer";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
  ui: uiReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
  characters: charactersReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

// AQUI ESTOY USANDO THUNK PARA QUE ME SIRVA DE MIDDLELWARE EN CASO DE QUE SE NECESITE PARA ALGUNA PETICION ASINCRONA
// AL MISMO TIEMPO ESTOY CONFIGURANDO MIS HERRAMIENTAS DE REDUX DE DESARROLLADOR