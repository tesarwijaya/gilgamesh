import { combineEpics } from 'redux-observable'

import * as MovieEpics from '../../pages/Movie/ducks/observables'

function rootEpics(...args) {
  const dependencies = {}
  const allEpics = [
    ...Object.values(MovieEpics),
  ]

  return combineEpics(...allEpics)(...args, dependencies)
}

export default rootEpics
