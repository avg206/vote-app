import 'semantic-ui-css/semantic.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import appState from './reducers'
import App from './components/App'
import { getNewImage } from './actions'

const logger = createLogger()
const store = createStore(appState, applyMiddleware(thunk, logger))
store.dispatch(getNewImage())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
