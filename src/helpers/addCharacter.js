
export const postData = async (data = {}) => {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch('http://localhost:5004/charactersHP', {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
