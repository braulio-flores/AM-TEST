import { types } from "../types/types"

export const favoritesAdd = (character) =>{
    return {
        type: types.favoriteAddCharacter,
        payload: character
    }
}

export const favoritesRemove = (character) =>{
    return {
        type: types.favoriteRemoveCharacter,
        payload: character
    }
}