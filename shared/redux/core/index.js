import store from 'redux/store'
import createReducers from './createReducers'


const reducers = createReducers(store.dispatch)

export {
  store,
  reducers,
}
