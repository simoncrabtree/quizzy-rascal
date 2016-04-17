export default (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    teams: Object.keys(state.teams.allTeams).map((key) => {
      return state.teams.allTeams[key]
    })
  }
}
