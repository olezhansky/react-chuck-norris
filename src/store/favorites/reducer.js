import * as types from './types';

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FAVORITE: {
          const { joke } = action.payload;
          joke.order = Date.now();
          const existJoke = state.find(
            (favorite) => favorite.id === action.payload.joke.id
          );
          if (existJoke) {
            return state;
          }
          return [action.payload.joke, ...state];
        }
        case types.REMOVE_FAVORITE: {
          const newFavorite = state.filter(
            (favorite) => favorite.id !== action.payload.cardId
          );
          return newFavorite;
        }
        case types.FAVORITES_FROM_LOCAL_STORAGE: {
          return action.payload;
        }
        case types.FAVORITE_CARD_CHANGE_ORDER:
          return state.map((t) => {
              if (t.id === action.payload.favoriteCard.id) {
                return {...t, order: action.payload.currentFavoriteCard.order};
              }
              if (t.id === action.payload.currentFavoriteCard.id) {
                return {...t, order: action.payload.favoriteCard.order};
              }
              return t;
            });
        default:
            return state;
    }
};

export default favoriteReducer;