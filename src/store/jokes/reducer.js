import { CURRENT_PAGE_ACTION, PAGINATE_PAGE_NUMBER, SET_JOKES } from "./types";

const initialState = {
  jokes: [],
  currentPage: 1,
  jokesPerPage: 3,

};

const jokesReducer = (state = initialState, action) => {
     switch (action.type) {
        case SET_JOKES:
        console.log(action.payload.jokes);
        return  {
          ...state,
          jokes: action.payload.jokes
        }
        case PAGINATE_PAGE_NUMBER:
          return {
            ...state,
            currentPage: action.payload.pageNumber,
          };
        case CURRENT_PAGE_ACTION:
          return {
            ...state,
            currentPage: 1
          };
        default:
          return state;
      }
}

export default jokesReducer;