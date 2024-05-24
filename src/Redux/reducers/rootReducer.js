import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  positions: searchReducer
})
export default rootReducer