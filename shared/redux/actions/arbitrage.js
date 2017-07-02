import actions from 'redux/actions'


export const create = (address) => {
  const dealContract = actions.deal.getDealContract(address)
  dealContract.openArbitrage.call((err, res) => {
    console.log(4444, res)
  })
}
