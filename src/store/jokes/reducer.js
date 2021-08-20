import { SET_JOKES } from "./types";

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
        default:
          return state;
      }
}

export default jokesReducer;