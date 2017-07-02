import contracts from 'redux/contracts'
import { reducers } from 'redux/core'
import actions from 'redux/actions'


export const getCount = () => contracts.deal.length().toNumber()

export const get = () => {
  const deals = Array
    .apply(null, { length: getCount() })
    .map((v, index) => {
      const address = actions.deal.getAddress(index)
      return actions.deal.get(address)
    })

  console.info('Deals: ', deals)

  reducers.deals.set(deals)
}
