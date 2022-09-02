import * as types from './types';

const initialState = {
  jokes: [],
  currentPage: 1,
  jokesPerPage: 3,
  isLoading: true,
  newJoke: null,
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_JOKES:
      return {
        ...state,
        jokes: action.payload.jokes,
        isLoading: false,
      };
    case types.PAGINATE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload.pageNumber,
      };
    case types.CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    case types.CLEAR_JOKES:
      return {
        ...state,
        jokes: [],
        isLoading: true,
      };
    case types.ADD_NEW_FAVORITE:
      return {
        ...state,
        newJoke: action.payload,
      };
    case types.CLEAR_NEW_FAVORITE:
      return {
        ...state,
        newJoke: null,
      };
    default:
      return state;
  }
};

export default jokesReducer;
