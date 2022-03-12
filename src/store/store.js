import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({

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