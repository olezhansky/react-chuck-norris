import getJokes from '../../api/getJokes'
import * as types from './types'

export function fetchJokes(selectedCategory, query) {
    return function (dispatch) {
        getJokes(selectedCategory, query).then(response => {
            console.log(response.data);
            if (response.data.hasOwnProperty('total')) {
                dispatch({type: types.SET_JOKES, payload: { jokes: response.data.result }})
            } else {
                dispatch({type: types.SET_JOKES, payload: { jokes: [response.data] }})
            }
        })
    }
}

export const paginateAction = (pageNumber) => ({
    type: types.PAGINATE_PAGE_NUMBER,
    payload: { pageNumber },
  });
export const currentPageAction = () => ({
    type: types.CURRENT_PAGE_ACTION,
  });
export const clearJokesAction = () => ({
    type: types.CLEAR_JOKES_ACTION,
  });
