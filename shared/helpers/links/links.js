import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  register: 'register',
  login: 'login',
  customerDeals: 'deals/customer',
  contractorDeals: 'deals/contractor',
  deal: 'deal/:address',
  createDeal: 'create-deal',
  editDeal: 'edit-deal/:address',
  arbitrations: 'arbitrations',
  arbitration: 'arbitration',
})

export default links
