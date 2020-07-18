import { combineReducers } from 'redux'

import Movie from '../../pages/Movie/ducks/reducer'

const appReducers = combineReducers({
  Movie,
})

const rootReducers = (state, action) => appReducers(state, action)

export default rootReducers
