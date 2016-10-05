import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { Router, browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import reducers from './reducers'
import routes from './routes'

import './sass/style.scss'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

import { createStoreWithMiddleware } from './store'

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('#main'))
