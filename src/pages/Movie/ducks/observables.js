import { ofType } from 'redux-observable'
import {
  of,
} from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  catchError,
  map,
  mergeMap,
} from 'rxjs/operators'

import {
  movieSearchSuccess,
  movieSearchFailed,

  movieSearchDetailSuccess,
  movieSearchDetailFailed,
} from './actions'

import { MOVIE_SEARCH, MOVIE_SEARCH_DETAIL } from './reducer'

export function movieSearchEpic(action$, state$) {
  return action$
    .pipe(
      ofType(MOVIE_SEARCH),
      mergeMap(() => ajax(`http://www.omdbapi.com/?apikey=db686161&s=${state$.value.Movie.search.form.query}`)
        .pipe(
          map(({ response }) => movieSearchSuccess(response)),
          catchError((response) => of(
            movieSearchFailed(response),
          )),
        )),
      catchError((response) => of(movieSearchFailed(response))),
    )
}

export function movieSearchDetailEpic(action$, state$) {
  return action$
    .pipe(
      ofType(MOVIE_SEARCH_DETAIL),
      mergeMap(() => ajax(`http://www.omdbapi.com/?apikey=db686161&i=${state$.value.Movie.detail.modal}&plot=full`)
        .pipe(
          map(({ response }) => movieSearchDetailSuccess(response)),
          catchError((response) => of(
            movieSearchDetailFailed(response),
          )),
        )),
      catchError((response) => of(movieSearchDetailFailed(response))),
    )
}
