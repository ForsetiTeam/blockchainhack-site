import Serializer from './Serializer'


const waitWeb3 = () => new Promise((resolve) => {
  if (typeof window.web3 !== 'undefined') {
    resolve()
  } else {
    const timer = setInterval(() => {
      if (typeof window.web3 !== 'undefined') {
        clearInterval(timer)
        resolve(web3)
      }
    }, 300)
  }
})

const gasParams = (deposit) => ({
  gas: 3000000,
  value: deposit,
  from: window.web3.eth.accounts[0],
})


export {
  Serializer,
  gasParams,
  waitWeb3,
}
