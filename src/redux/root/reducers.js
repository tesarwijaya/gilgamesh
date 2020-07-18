import { combineReducers } from 'redux'

const appReducers = combineReducers({
  
})

const rootReducers = (state, action) => {
  return appReducers(state, action)
}


export default rootReducers
