
export const getCharacters = async ( category ) => {
    let url ='http://localhost:5000/charactersHP';
    const res = await fetch(url);
    const  characters  = await res.json();
    return characters;
  };
