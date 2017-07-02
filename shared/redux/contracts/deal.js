import web3 from 'bj-web3'


const dealABI =  [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "deals", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "length", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_title", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_contractor", "type": "address" }, { "name": "_openTime", "type": "uint256" }, { "name": "_closeTime", "type": "uint256" }, { "name": "_deposit", "type": "uint256" } ], "name": "createDeal", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" } ]
const address = '0x487604064d9fb797E36E8f66ce53BFd918Af43f5'
const contractInstance = web3.eth.contract(dealABI).at(address)


export default contractInstance
