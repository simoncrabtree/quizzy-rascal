import { API_CALL } from '../app/middleware/api'

export const APP_INIT = 'APP_INIT'
export const LOGIN = 'LOGIN'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const CHANGE_TEAM_NAME = 'CHANGE_TEAM_NAME'
export const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST'
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS'
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE'
export const NEW_QUESTION = 'NEW_QUESTION'

export const appInit = () => ({
  type: APP_INIT
})

export const login = (teamName) => ({
  type: API_CALL,
  endpoint: '/login',
  method: 'post',
  body: {
    teamName
  },
  onRequest: LOGIN_REQUEST,
  onSuccess: LOGIN_SUCCESS,
  onFailure: LOGIN_FAILURE
})

export const changeTeamName = (teamName) => ({
  type: CHANGE_TEAM_NAME,
  teamName
})

export const fetchTeam = () => ({
  type: API_CALL,
  endpoint: '/team',
  method: 'GET',
  onRequest: FETCH_TEAM_REQUEST,
  onSuccess: FETCH_TEAM_SUCCESS,
  onFailure: FETCH_TEAM_FAILURE
})

export const fetchTeamIfNecessary = () => (dispatch, getState) => {
  const teamFromState = getState().team
  if(teamFromState.token && !teamFromState.name)
    return dispatch(fetchTeam())
}
