import { List, fromJS } from 'bj-immutable'


export const initialState = List()

export const set = (state, payload) => fromJS(payload)
