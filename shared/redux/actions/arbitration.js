import actions from 'redux/actions'


export const create = (address, callback) => {
  actions.deal.getDealContract(address).then((dealContract) => {
    dealContract.openArbitrage.call((err, res) => {
      callback(res)
    })
  })
}
