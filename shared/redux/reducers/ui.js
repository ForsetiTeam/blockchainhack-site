import { Map } from 'immutable'


export const initialState = Map({
  isLoaderVisible: false,
})

export const setLoaderVisibility = (state, payload) =>
  state.set('isLoaderVisible', payload)
