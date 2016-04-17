import { expect } from 'chai'
import { reducerReduce } from '../specHelper'
import teams from './teams'
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS 
} from '../actions'

describe('teams', () => {
  describe('fetch teams requested', () => {
    const state = reducerReduce(teams, [{
      type: FETCH_TEAMS_REQUEST
    }])

    it('sets the teams.isFetching flag', () => {
      expect(state.isFetching).to.be.true
    })

    it('allTeams is empty', () => {
      expect(state.allTeams).to.deep.equal({})
    })
  })

  describe('fetch teams succeeded', () => {
    const state = reducerReduce(teams, [{
      type: FETCH_TEAMS_REQUEST
    },{
      type: FETCH_TEAMS_SUCCESS,
      response: {
        "team1": {name: "Team 1"},
        "team2": {name: "Team 2"},
      }
    }])

    it('clears the teams.isFetching flag', () => {
      expect(state.isFetching).to.be.false
    })

    it('adds teams to state', () => {
      expect(state.allTeams.team1.name).to.equal("Team 1")
    })
  })
})
