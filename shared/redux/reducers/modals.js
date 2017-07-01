import { Map, fromJS } from 'immutable'


let zIndex = 10000

export const initialState = Map({})

export const open = (state, { name, data = {} }) =>
  state.set(name, fromJS({
    name,
    data,
    zIndex: ++zIndex,
  }))

export const close = (state, payload /* name */) =>
  state.remove(payload)

export const update = (state, { name, data = {} }) =>
  state.updateIn([name, 'data'], (v) => v.mergeDeep(data))
