import { expect } from 'chai'
import { reducerReduce } from '../specHelper'
import team from './team'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../actions'

describe('team', () => {
  it('is not logged in on startup', () => {
    const state = reducerReduce(team, [])
    expect(state.isLoggingIn).to.be.false
    expect(state.isLoggedIn).to.be.false
  })

  describe('user attempts to log in', () => {
    const state = reducerReduce(team, [{
      type: LOGIN_REQUEST
    }])

    it('is logged in', () => {
      expect(state.isLoggingIn).to.be.true
    })
  })

  describe('user logs in and successful response is received', () => {
    const state = reducerReduce(team, [{
      type: LOGIN_REQUEST
    }, {
      type: LOGIN_SUCCESS,
      id: 'token-123'
    }])

    it('is logged in', () => {
      expect(state.isLoggedIn).to.be.true
      expect(state.isLoggingIn).to.be.false
    })
  })
})
