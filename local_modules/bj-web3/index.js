import Web3 from 'web3'
import Serializer from './Serializer'


const web3 = new Web3(new Web3.providers.HttpProvider())


export default web3

export {
  Serializer,
}
