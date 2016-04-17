import { API_CALL } from '../app/middleware/api'

export const APP_INIT = 'APP_INIT'
export const LOGIN = 'LOGIN'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST'
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE'
export const NEW_QUESTION = 'NEW_QUESTION'

export const appInit = () => ({
  type: APP_INIT
})

export const login = (password) => ({
  type: API_CALL,
  endpoint: '/quizmasterlogin',
  method: 'post',
  body: {
    password
  },
  onRequest: LOGIN_REQUEST,
  onSuccess: LOGIN_SUCCESS,
  onFailure: LOGIN_FAILURE
})

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password
})

export const fetchTeams = () => ({
  type: API_CALL,
  endpoint: '/teams',
  method: 'GET',
  onRequest: FETCH_TEAMS_REQUEST,
  onSuccess: FETCH_TEAMS_SUCCESS,
  onFailure: FETCH_TEAMS_FAILURE
})

export const fetchTeamsIfNecessary = () => (dispatch, getState) => {
  if(getState().auth.isLoggedIn)
    return dispatch(fetchTeams())
}
