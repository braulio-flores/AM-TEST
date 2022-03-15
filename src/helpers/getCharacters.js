import { urlToFetchCharacters } from "./variables";

export const getCharacters = async ( category ) => {
    let url = urlToFetchCharacters;
    const res = await fetch(url);
    const  characters  = await res.json();
    return characters;
  };
