import { wrapReducers } from 'redaction/immutable'
import localReducers from 'redux/reducers'
import wrapRouterReducers from 'redux/reducers/router'



export default (dispatch) => ({
  ...wrapReducers(localReducers, dispatch),
  router: wrapRouterReducers(dispatch),
})
