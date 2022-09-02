/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import favoriteReducer from './favorites/reducer';
import jokesReducer from './jokes/reducer';
import * as types from './favorites/types';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (
      action.type === types.ADD_FAVORITE ||
      action.type === types.REMOVE_FAVORITE ||
      action.type === types.FAVORITE_CARD_CHANGE_ORDER
    ) {
      const { favorite } = getState();
      const stringifiedFavorite = JSON.stringify(favorite);
      localStorage.setItem('favorites', stringifiedFavorite);
    }
    return result;
  };

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  jokes: jokesReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
