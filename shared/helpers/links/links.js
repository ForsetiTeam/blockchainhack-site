import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  register: 'register',
  login: 'login',
  customerDeals: 'deals/customer',
  contractorDeals: 'deals/contractor',
  deal: 'deal/:address',
  createDeal: 'deal/create',
  editDeal: 'deal/edit',
  arbitrations: 'arbitrations',
  arbitration: 'arbitration',
})

export default links
