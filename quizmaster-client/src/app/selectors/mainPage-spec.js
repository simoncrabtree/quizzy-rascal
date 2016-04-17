import { expect } from 'chai'
import selector from './mainPage'

describe('main page', () => {
  const mainPage = selector({
    auth: {
      isLoggedIn: true
    },
    teams: {
      allTeams: {
          123: {name: 'Team 1'},
          456: {name: 'Team 2'}
      }
    }
  })

  it('knows if you are logged in', () => {
    expect(mainPage.isLoggedIn).to.be.true
  })

  it('displays the list of teams', () => {
    expect(mainPage.teams.length).to.equal(2)
    expect(mainPage.teams[0].name).to.equal('Team 1')
    expect(mainPage.teams[1].name).to.equal('Team 2')
  })
})
