import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS
} from '../actions'

export default (state={isFetching: false, allTeams: {}}, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allTeams: action.response
      }
      
    default:
      return state
  }
}
