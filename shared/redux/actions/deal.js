import web3, { Serializer } from 'bj-web3'


const dealABI =  [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "deals", "outputs": [ { "name": "adr", "type": "address", "value": "0x7b2534f697fa92e875267bb6a406e61c02fc3345" }, { "name": "amount", "type": "uint256", "value": "1000000000000000000" }, { "name": "acceptDate", "type": "uint256", "value": "1498948235" }, { "name": "dealDate", "type": "uint256", "value": "1498948835" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "length", "outputs": [ { "name": "", "type": "uint16", "value": "1" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "dealAddress", "type": "address" } ], "name": "addDeal", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "index", "type": "uint16" } ], "name": "getDeal", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_contractor", "type": "address" }, { "name": "_openTime", "type": "uint256" }, { "name": "_closeTime", "type": "uint256" }, { "name": "_deposit", "type": "uint256" } ], "name": "createDeal", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" } ]
const address = '0xA5e72aD51F4c8ADeb50B1896bA532ecc829be6E2'
const contractInstance = web3.eth.contract(dealABI).at(address)

export const get = (id /* address */) => {
  const hash = contractInstance.getDeal(id, {
    gas: 800000,
    from: web3.eth.accounts[0],
  })

  return new Serializer([
    { key: 'id', decode: 'address' },
    { key: 'amount', decode: 'uint', modify: v => v.toString() },
    { key: 'acceptDate', decode: 'uint', modify: v => v.toString() },
    { key: 'dealDate', decode: 'uint', modify: v => v.toString() },
  ])
    .hashToObject(hash)
}


export const create = () => {
  const values = {
    contractor: '0x4C67EB86d70354731f11981aeE91d969e3823c39',
    openTime: 1498948146203,
    closeTime: 1509948146203,
    deposit: web3.toWei(0.1),
  }

  const data = new Serializer([
    { key: 'contractor' },
    { key: 'openTime' },
    { key: 'closeTime' },
    { key: 'deposit' },
  ])
    .toArray(values)

  const transactionId = contractInstance.createDeal(...data, {
    gas: 800000,
    from: web3.eth.accounts[0],
  })

  console.log(`Create Deal: Transaction ID: ${transactionId}`)
}
