import { combineEpics } from 'redux-observable'

function rootEpics(...args) {
  const dependencies = {}
  const allEpics = [
    
  ]

  return combineEpics(...allEpics)(...args, dependencies)
}

export default rootEpics
