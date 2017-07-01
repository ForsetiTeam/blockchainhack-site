import { fromJS } from 'immutable'


const initialState = fromJS({
  locationBeforeTransitions: null,
})

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case '@@router/LOCATION_CHANGE':
      return state.set('locationBeforeTransitions', payload)
    default:
      return state
  }
}
