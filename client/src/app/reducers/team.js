import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS, 
  LOGIN_FAILURE,
  CHANGE_TEAM_NAME ,
  FETCH_TEAM_REQUEST
} from '../actions'

export default (state={isLoggingIn: false, isLoggedIn: false}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.response.id,
        name: action.response.teamName,
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

    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    default:
      return state
  }
}
