import { expect } from 'chai'
import { reducerReduce } from '../specHelper'
import team from './team'
import {
} from '../actions'

describe('team', () => {
  it('is not logged in on startup', () => {
    const state = reducerReduce(team, [])
    expect(state.isLoggedIn).to.be.false
  })
})
