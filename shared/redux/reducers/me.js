import { fromJS } from 'immutable'


export const initialState = fromJS({

})

export const update = (state, payload) =>
  state.mergeDeep(payload)
