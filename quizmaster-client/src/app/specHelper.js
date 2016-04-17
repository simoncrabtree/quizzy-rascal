import deepFreeze from 'deep-freeze'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../app/reducers'

export const reduce = (actions) => {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
  for (var action of actions)
    store.dispatch(action)
  return store.getState()
}

export const reducerReduce = (reducer, actions) => {
  var state = reducer(undefined, {type: 'NO_SUCH_ACTION'})
  for (var action of actions) {
    deepFreeze(state)
    state = reducer(state, action)
  }
  return state
}
