import { urlToFetchCharacters } from "./variables";

export const postData = async (data = {}) => {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(urlToFetchCharacters, {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
