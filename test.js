const Web3 = require('web3')


const address = '0x9CfA77D3A096CdC7E33F3587d8fdDA32e7ca01cc'
const abi = [ { "constant": true, "inputs": [], "name": "result", "outputs": [ { "name": "", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "a", "type": "address" } ], "name": "hash", "outputs": [ { "name": "", "type": "bytes32", "value": "0x5380c7b7ae81a58eb98d9c78de4a1fd7fd9535fc953ed2be602daaa41767312a" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "input", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" } ]


const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io'))
const Contract = web3.eth.contract(abi)
const contractInstance = Contract.at(address)


console.log(contractInstance._eth.getBalance())
