import { expect } from 'chai'
import { reducerReduce } from '../specHelper'
import team from './team'
import {
  LOGIN_SUCCESS
} from '../actions'

describe('team', () => {
  it('is not logged in on startup', () => {
    const state = reducerReduce(team, [])
    expect(state.isLoggedIn).to.be.false
  })

  describe('user logs in', () => {
    it('is logged in', () => {
      const state = reducerReduce(team, [{
        type: LOGIN_SUCCESS,
        id: 'token-123'
      }])
      expect(state.isLoggedIn).to.be.true
    })
  })
})
