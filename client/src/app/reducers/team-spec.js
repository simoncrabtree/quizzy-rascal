import { expect } from 'chai'
import { reducerReduce } from '../specHelper'
import team from './team'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE
} from '../actions'

describe('team', () => {
  it('is not logged in on startup', () => {
    const state = reducerReduce(team, [])
    expect(state.isLoggingIn).to.be.false
    expect(state.isLoggedIn).to.be.false
    expect(state.name).to.be.undefined
  })

  describe('user attempts to log in', () => {
    const state = reducerReduce(team, [{
      type: LOGIN_REQUEST
    }])

    it('will show the Logging In status', () => {
      expect(state.isLoggingIn).to.be.true
    })
  })

  describe('user logs in and successful response is received', () => {
    const state = reducerReduce(team, [{
      type: LOGIN_REQUEST
    }, {
      type: LOGIN_SUCCESS,
      response: {
        token: 'token-123',
        teamName: 'Test Team 1'
      }
    }])

    it('will no longer show the Logging In status', () => {
      expect(state.isLoggingIn).to.be.false
    })

    it('is logged in', () => {
      expect(state.isLoggedIn).to.be.true
    })

    it('has the correct team name', () => {
      expect(state.name).to.equal('Test Team 1')
    })

    it('has the token from the server', () => {
      expect(state.token).to.equal('token-123')
    })
  })

  describe('fetch team requested', () => {
    const state = reducerReduce(team, [{
      type: FETCH_TEAM_REQUEST
    }])

    it('sets the team.isFetching flag', () => {
      expect(state.isFetching).to.be.true  
    })
  })

  describe('fetch team successfully', () => {
    const state = reducerReduce(team, [{
      type: FETCH_TEAM_SUCCESS,
      response: {name: 'My Team Name'}
    }])

    it('sets the team name', () => {
      expect(state.name).to.equal('My Team Name')  
    })
  })

  describe('fetch team fails', () => {
    const state = reducerReduce(team, [{
      type: FETCH_TEAM_FAILURE
    }])

    it('logs the team out so they must log in again', () => {
      expect(state.token).to.equal(null)
    })
  })
})
