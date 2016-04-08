import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import localStorage from '../middleware/localStorage'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(
    thunk,
    api,
    localStorage,
    createLogger()
  )
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
