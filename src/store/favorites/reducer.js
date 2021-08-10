// import {ADD_FAVORITE, REMOVE_FAVORITE} from './types'
import * as types from './types'

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FAVORITE: {
            // console.log(state);
          const existJoke = state.find(
            (favorite) => favorite.id === action.payload.joke.id
          );
          if (existJoke) {
            return state;
          }
          return [action.payload.joke, ...state]
        }
        case types.REMOVE_FAVORITE: {
          const newFavorite = state.filter(
            (favorite) => favorite.id !== action.payload.cardId
          );
          return newFavorite  
        }
        default:
            return state; 
    }
}


export default favoriteReducer