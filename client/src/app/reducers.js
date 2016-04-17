import { combineReducers } from 'redux'
import team from './reducers/team'
import question from './reducers/question'

export default combineReducers({
  team,
  question
})
