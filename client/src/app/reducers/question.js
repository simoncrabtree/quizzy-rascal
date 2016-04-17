import {
  NEW_QUESTION
} from '../actions'

export default (state={current: {}}, action) => {
  switch (action.type) {
    case NEW_QUESTION:
      return {
        ...state,
        current: {
          question: "TEST QUESTION"
        }
      }

    default:
      return state
  }
}
