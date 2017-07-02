import { Map, fromJS } from 'bj-immutable'


export const initialState = Map()

export const set = (state, payload) => fromJS(payload)
