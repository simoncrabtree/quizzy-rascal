import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS, 
  LOGIN_FAILURE,
  CHANGE_TEAM_NAME 
} from '../actions'

export default (state={isLoggingIn: false, isLoggedIn: false, name: "World"}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.id,
        isLoggedIn: true,
        isLoggingIn: false
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false
      }

    case CHANGE_TEAM_NAME:
      return {
        ...state,
        name: action.teamName
      }

    default:
      return state
  }
}
