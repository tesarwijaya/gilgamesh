import 'rxjs'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootEpics from './root/epics'
import rootReducers from './root/reducers'

export default function initStore(initialState) {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })

  const middlewares = process.env.NODE_ENV !== 'production'
    ? [epicMiddleware, logger]
    : [epicMiddleware]

  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middlewares),
  )

  epicMiddleware.run(rootEpics)

  return store
}
