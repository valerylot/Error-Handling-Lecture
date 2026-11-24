const BASE_URL = "https://rickandmortyapi.com/api/character/";

//Fetch one character by ID
//getCharacter(1) -> Rick Sanchez
//getCharacter(9999) -> throws "No character with that ID..."

export const getCharacter = async (id) => {
    const response = await fetch(BASE_URL + id);
    console.log(response.status, response.ok);

    //a 404 or 500 does NOT throw, so we check and throw ourselves
    //these errors travel back to the try/catch that will be in our scripts.js
    if(response.status === 404){
        throw new Error("No character with that ID. Try 1 to 826.");
    }

    if(!response.ok){
        throw new Error(`Server Error: ${response.status}`);
    }

    //only now is it safe to read the JSON
    return await response.json();
}