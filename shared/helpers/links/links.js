import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  register: 'register',
  login: 'login',
  deals: 'deals',
  customerDeals: 'deals/customer',
  contractorDeals: 'deals/contractor',
  deal: 'deal',
  createDeal: 'deal/create',
  editDeal: 'deal/edit',
  arbitrations: 'arbitrations',
  arbitration: 'arbitration',
})

export default links
