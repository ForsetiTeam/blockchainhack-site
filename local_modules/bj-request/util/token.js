import actions from 'redux/actions'


const load = (tokenName) => actions.requestTokens.load(tokenName)

const update = (tokenName, value) => {
  actions.requestTokens.update({
    [tokenName]: value,
  })
}


export default {
  load,
  update,
}
