import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import {rootReducer} from './rootReducer'
import thunk from "redux-thunk";
import favoriteReducer from "./favorites/reducer";
import jokesReducer from "./jokes/reducer";
import * as favoriteTypes from "./favorites/types";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);

    // if (favoriteTypes.includes(action.type))  {}
    if (
      action.type === favoriteTypes.ADD_FAVORITE ||
      action.type === favoriteTypes.REMOVE_FAVORITE
    ) {
      const { favorite } = getState();
      const stringifiedFavorite = JSON.stringify(favorite);
      localStorage.setItem("favorite", stringifiedFavorite);
    }

    return result;
  };

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  jokes: jokesReducer,
});

const store = createStore(
  rootReducer,
  {
    jokes: [],
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  },
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
