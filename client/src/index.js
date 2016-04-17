import './app/index.less'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
var Nes = require('nes')

var client = new Nes.Client('ws://localhost:1337')
client.connect(function () {
  client.onUpdate = function (update) {
    store.dispatch(update)
  }
})

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
