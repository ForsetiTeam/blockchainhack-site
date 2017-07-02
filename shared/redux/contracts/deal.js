import { waitWeb3 } from 'bj-web3'


const dealABI = [ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "deals", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "length", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_title", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_contractor", "type": "address" }, { "name": "_openTime", "type": "uint256" }, { "name": "_closeTime", "type": "uint256" }, { "name": "_deposit", "type": "uint256" } ], "name": "createDeal", "outputs": [], "payable": true, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" } ]
const address = '0x745E33D378eD783130BcA0b969163AB74c0a1Fe6'
let contractInstance


export default () => new Promise((resolve) => {
  if (contractInstance) {
    resolve(contractInstance)
  } else {
    waitWeb3().then(() => {
      contractInstance = window.web3.eth.contract(dealABI).at(address)
      resolve(contractInstance)
    })
  }
})
