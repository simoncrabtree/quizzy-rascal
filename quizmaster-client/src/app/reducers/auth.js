import {
  LOGIN_SUCCESS
} from '../actions'

export default (state={isLoggedIn: false}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
      
    default:
      return state
  }
}
