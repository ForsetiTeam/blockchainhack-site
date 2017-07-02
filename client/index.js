import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { store } from 'redux/core'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from 'routes'

import Root from 'containers/Root'


const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.get('routing').toJS(),
})

ReactDOM.render(
  <Root store={store} history={history}>
    {routes}
  </Root>,
  document.getElementById('root')
)
