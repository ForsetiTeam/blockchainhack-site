import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers } from 'redaction/immutable'
import { browserHistory } from 'react-router'
import localReducers from 'redux/reducers'
import routingReducer from 'redux/reducers/routing'
import { services } from '@eagle/app-config'


const initialState = fromJS(window.__initialState__ || {})

if (window.__initialState__ && !window.__initialState__.user.loggedIn) {
  window.location.href = `${services.base}register/log-in?redirect=${window.location.pathname}`
}


const store = createStore({
  reducers: {
    ...combineReducers(localReducers),
    routing: routingReducer,
  },
  middleware: [
    routerMiddleware(browserHistory),
  ],
  initialState,
})

export default store
