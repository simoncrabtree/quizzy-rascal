export default (state) => {
  return {
    teamName: state.team.name,
    token: state.team.token,
    question: state.question.current
  }
}
