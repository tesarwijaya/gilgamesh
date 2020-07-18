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
} from './actions'

import { MOVIE_SEARCH } from "./reducer"

export function movieSearchEpic(action$, state$) {
  return action$
    .pipe(
      ofType(MOVIE_SEARCH),
      mergeMap((payloads) => ajax(`http://www.omdbapi.com/?apikey=db686161&s=${state$.value.Movie.form.query}`)
        .pipe(
          map(({ response }) => movieSearchSuccess(response)),
          catchError((response) => of(
            movieSearchFailed({ message: response.xhr.statusText }),
          )),
        )),
      catchError((response) => of(movieSearchFailed({ message: response.xhr.statusText }))),
    )
}