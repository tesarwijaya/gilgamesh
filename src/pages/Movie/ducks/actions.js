import {
  MOVIE_SEARCH,
  MOVIE_SEARCH_FAILED,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FORM,
} from './reducer'

export function movieSearch() {
  return {
    type: MOVIE_SEARCH,
  }
}

export function movieSearchFailed(error) {
  return {
    type: MOVIE_SEARCH_FAILED,
    payload: {error},
  }
}

export function movieSearchSuccess(data) {
  return {
    type: MOVIE_SEARCH_SUCCESS,
    payload: {data},
  }
}

export function movieSearchForm(meta, data) {
  return {
    type: MOVIE_SEARCH_FORM,
    payload: {meta, data},
  }
}
