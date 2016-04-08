import './app/index.less'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './app/store'
import { appInit } from './app/actions'

import MainPage from './app/MainPage'

const store = configureStore()
store.dispatch(appInit())

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
)
