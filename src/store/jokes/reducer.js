import {
  CLEAR_JOKES_ACTION,
  CURRENT_PAGE_ACTION,
  PAGINATE_PAGE_NUMBER,
  SET_JOKES,
} from './types';

const initialState = {
  jokes: [],
  currentPage: 1,
  jokesPerPage: 3,
  isLoading: true,
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOKES:
      return {
        ...state,
        jokes: action.payload.jokes,
        isLoading: false,
      };
    case PAGINATE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload.pageNumber,
      };
    case CURRENT_PAGE_ACTION:
      return {
        ...state,
        currentPage: 1,
      };
    case CLEAR_JOKES_ACTION:
      return {
        ...state,
        jokes: [],
        isLoading: true,
      };
    default:
      return state;
  }
};

export default jokesReducer;
