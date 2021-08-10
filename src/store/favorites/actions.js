import { ADD_FAVORITE } from "./types"


export const addFavoriteJokeAction = joke => {
    return {
        type: ADD_FAVORITE, 
        payload: {joke}
    }
}

export const removeFavoriteJokeAction = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: {cardId: id}
    }
}

