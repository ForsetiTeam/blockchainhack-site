import Web3 from 'web3'
import Serializer from './Serializer'


const web3 = new Web3(new Web3.providers.HttpProvider())

const gasParams = (deposit) => ({
  gas: 800000,
  value: deposit,
  from: web3.eth.accounts[0],
})


export default web3

export {
  Serializer,
  gasParams,
}
