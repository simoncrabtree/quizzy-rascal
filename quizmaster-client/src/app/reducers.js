import { combineReducers } from 'redux'
import teams from './reducers/teams'
import auth from './reducers/auth'

export default combineReducers({
  teams,
  auth
})
