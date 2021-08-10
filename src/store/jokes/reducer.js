import { SET_JOKES } from "./types";

const initialState = [];

const jokesReducer = (state = initialState, action) => {
     switch (action.type) {
        case SET_JOKES: {
          //   console.log("action", action);
          
          return  action.payload.jokes
        }
        default:
          return state;
      }
}

export default jokesReducer