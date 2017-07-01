// Router is an exception of all other reducers
// It wraps just with dispatch method passing from core/reducers

import { mapValues } from 'lodash'
import { routerActions } from 'react-router-redux'


const wrapRouterReducers = (dispatch) =>
  mapValues(routerActions, (action) => (...args) => dispatch(action(...args)))

export default wrapRouterReducers
