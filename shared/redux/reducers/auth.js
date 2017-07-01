import { Map } from 'immutable'


export const initialState = Map({
  isLoggedIn: false,
})

export const update = (state, payload) =>
  state.merge(payload)
