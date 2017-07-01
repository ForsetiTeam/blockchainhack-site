import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  register: 'register',
  login: 'login',
  deals: 'deals',
  createDeal: 'deal/create',
  editDeal: 'deal/edit',
  arbitration: 'arbitration',
})

export default links
