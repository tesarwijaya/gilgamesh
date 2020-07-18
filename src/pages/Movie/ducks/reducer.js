import createReducer from '../../../libs/reducer'
import state from './state'

export const MOVIE_SEARCH = 'MOVIE_SEARCH'
export const MOVIE_SEARCH_FAILED = 'MOVIE_SEARCH_FAILED'
export const MOVIE_SEARCH_SUCCESS = 'MOVIE_SEARCH_SUCCESS'
export const MOVIE_SEARCH_FORM = 'MOVIE_SEARCH_FORM'

const Movie = {
  [MOVIE_SEARCH]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [MOVIE_SEARCH_FAILED]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    error: {
      message: payload.error.message,
    },
  }),
  [MOVIE_SEARCH_SUCCESS]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    data: payload.data,
  }),
  [MOVIE_SEARCH_FORM]: (state, {payload}) => ({
    ...state,
    form: {
      ...state.form,
      [payload.meta]: payload.data
    }
  })
}

export default createReducer(Movie, state)