import { ADD_FAVORITE, FAVORITES_FROM_LOCAL_STORAGE } from "./types"


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

export const favoritesFromLocalStorageAction = (favoritesFromLocalStorageAction) => ({
    type: FAVORITES_FROM_LOCAL_STORAGE,
    payload: JSON.parse(favoritesFromLocalStorageAction)
})
