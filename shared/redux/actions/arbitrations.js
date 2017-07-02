import actions from 'redux/actions'
import { reducers } from 'redux/core'


export const get = () => {
  actions.deals.get((deals) => {
    reducers.arbitrations.set(deals.filter(({ statuses: { arbitraged } }) => arbitraged))
  })
}
