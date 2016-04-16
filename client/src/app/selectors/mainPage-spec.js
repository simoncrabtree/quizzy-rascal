import { expect } from 'chai'
import selector from './mainPage'

describe('main page', () => {
  const mainPage = selector({
    team: {
      name: 'My Team'
    }
  })

  it('displays the team name', () => {
    expect(mainPage.teamName).to.equal('My Team')
  })
})
