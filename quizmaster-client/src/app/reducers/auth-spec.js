import { expect } from 'chai'
import { reducerReduce } from '../specHelper'
import auth from './auth'
import {
  LOGIN_SUCCESS 
} from '../actions'

describe('auth', () => {
  const state = reducerReduce(auth, [{}])

  it('by default you are not logged in', () => {
    expect(state.isLoggedIn).to.be.false
  })

  describe('on login success', () => {
    const state = reducerReduce(auth, [{
      type: LOGIN_SUCCESS
    }])

    it('sets the isloggedIn flag', () => {
      expect(state.isLoggedIn).to.be.true
    })
  })
})
