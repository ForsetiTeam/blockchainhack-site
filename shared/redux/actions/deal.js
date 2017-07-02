import { Serializer, gasParams } from 'bj-web3'
import contracts from 'redux/contracts'
import { reducers } from 'redux/core'
import web3 from 'bj-web3'


export const getAddress = (index) => contracts.deal.deals(index)

export const get = (address) => {
  const dealABI = [{"constant":true,"inputs":[],"name":"decideTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"customer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"accept","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"cancelDeal","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractorConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"addArgument","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"title","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"customerDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"closed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"customerConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"closeTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"accepted","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbiterPool","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"openArbitrage","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"confirm","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"customerWon","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbitraged","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"openTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractorWon","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"commission","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_winner","type":"address"}],"name":"decide","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractor","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"arbiter","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_title","type":"string"},{"name":"_description","type":"string"},{"name":"_customer","type":"address"},{"name":"_contractor","type":"address"},{"name":"_openTime","type":"uint256"},{"name":"_closeTime","type":"uint256"},{"name":"_deposit","type":"uint256"},{"name":"_poolAddress","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customer","type":"address"},{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"now","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customer","type":"address"},{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"now","type":"uint256"}],"name":"Finish","type":"event"}]
  const dealContract = web3.eth.contract(dealABI).at(address)

  const deal = new Serializer({
    title: {},
    description: {},
    contractor: {},
    customer: {},
    arbiterPool: {},
    arbiter: {},
    customerDeposit: { modify: v => v.toNumber() },
    deposit: { modify: v => Number(web3.fromWei(v)) },
    commission: { modify: v => v.toNumber() },
    openTime: { modify: v => v.toNumber() * 1000 },
    closeTime: { modify: v => v.toNumber() },
  })
    .functionsToObject(dealContract)

  deal.address = address

  const statuses = new Serializer({
    customerConfirmed: {},
    customerWon: {},
    contractorConfirmed: {},
    contractorWon: {},
    arbitraged: {},
    accepted: {},
    closed: {},
  })
    .functionsToObject(dealContract)

  let customerStatus
  let contractorStatus

  if (!statuses.accepted) {
    customerStatus = 'Waiting for response'
    contractorStatus = 'New'
  } else {
    customerStatus = 'In progress'
    contractorStatus = 'In progress'
  }

  if (statuses.arbitraged) {
    customerStatus = 'Arbitraged'
    contractorStatus = 'Arbitraged'
  }

  if (statuses.closed) {
    customerStatus = 'Closed'
    contractorStatus = 'Closed'
  }

  deal.customerStatus = customerStatus
  deal.contractorStatus = contractorStatus

  console.info('Deal: ', deal)

  return deal
}

export const getOnce = (address) => {
  const deal = get(address)
  reducers.deal.set(deal)
}

export const create = (_values) =>
  new Promise((resolve) => {
    const values = { ..._values }

    values.deposit      = web3.toWei(Number(values.deposit))
    values.openTime     = values.openTime.unix()
    values.closeTime    = values.closeTime.unix()

    const data = new Serializer([
      { key: 'title' },
      { key: 'description' },
      { key: 'contractorAddress' },
      { key: 'openTime' },
      { key: 'closeTime' },
      { key: 'deposit' },
    ])
      .toArray(values)

    const transactionId = contracts.deal.createDeal(...data, gasParams(values.deposit))

    console.info('Deal Created', transactionId)

    resolve(transactionId)
  })
