import contracts from 'redux/contracts'
import { reducers } from 'redux/core'
import actions from 'redux/actions'


export const getCount = (callback) =>
  contracts.deal().then((instance) => {
    instance.length.call(callback)
  })

export const get = () => {
  getCount((err, count) => {
    const arr = Array.apply(null, { length: count.toString() })

    Promise.all(arr.map((v, index) => new Promise((resolve) => {
      actions.deal.getAddress(index, (err, address) => {
        actions.deal.get(address, (err, dealData) => {
          resolve(dealData)
        })
      })
    })))
      .then((deals) => {
        reducers.deals.set(deals)
      })
  })
}
