import web3 from 'bj-web3'


const dealABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deals","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"length","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"string"},{"name":"_description","type":"string"},{"name":"_contractor","type":"address"},{"name":"_openTime","type":"uint256"},{"name":"_closeTime","type":"uint256"},{"name":"_deposit","type":"uint256"}],"name":"createDeal","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]
const address = '0xB04976cef9d5DD25b73f42E7B053d657EF2733Be'
const contractInstance = web3.eth.contract(dealABI).at(address)


export default contractInstance
