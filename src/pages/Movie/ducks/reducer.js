import createReducer from '../../../libs/reducer'
import state from './state'

export const MOVIE_SEARCH = 'MOVIE_SEARCH'
export const MOVIE_SEARCH_FAILED = 'MOVIE_SEARCH_FAILED'
export const MOVIE_SEARCH_SUCCESS = 'MOVIE_SEARCH_SUCCESS'
export const MOVIE_SEARCH_FORM = 'MOVIE_SEARCH_FORM'

export const MOVIE_SEARCH_DETAIL = 'MOVIE_SEARCH_DETAIL'
export const MOVIE_SEARCH_DETAIL_FAILED = 'MOVIE_SEARCH_DETAIL_FAILED'
export const MOVIE_SEARCH_DETAIL_MODAL = 'MOVIE_SEARCH_DETAIL_MODAL'
export const MOVIE_SEARCH_DETAIL_SUCCESS = 'MOVIE_SEARCH_DETAIL_SUCCESS'

const Movie = {
  [MOVIE_SEARCH]: (state) => ({
    ...state,
    search: {
      ...state.search,
      isLoading: true,
    },
  }),
  [MOVIE_SEARCH_FAILED]: (state, {payload}) => ({
    ...state,
    search: {
      ...state.search,
      isLoading: false,
      error: {
        message: payload.error.message,
      },
    },
  }),
  [MOVIE_SEARCH_SUCCESS]: (state, {payload}) => ({
    ...state,
    search: {
      ...state.search,
      isLoading: false,
      data: payload.data,
    },
  }),
  [MOVIE_SEARCH_FORM]: (state, {payload}) => ({
    ...state,
    search: {
      ...state.search,
      form: {
        ...state.form,
        [payload.meta]: payload.data
      }
    },
  }),

  [MOVIE_SEARCH_DETAIL]: (state) => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: true,
    }
  }),
  [MOVIE_SEARCH_DETAIL_FAILED]: (state, {payload}) => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: false,
      error: {
        message: payload.error.message,
      }
    }
  }),
  [MOVIE_SEARCH_DETAIL_MODAL]: (state, {payload}) => ({
    ...state,
    detail: {
      ...state.detail,
      modal: payload.data,
    }
  }),
  [MOVIE_SEARCH_DETAIL_SUCCESS]: (state, {payload}) => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: false,
      data: payload.data,
    }
  })
}

export default createReducer(Movie, state)