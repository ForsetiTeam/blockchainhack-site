import { reducers } from 'redux/core'
import request from 'sb-request'


export const fetch = () =>
  request.get('rest/user/profile')
    .then((result) => {
      reducers.auth.update({ isLoggedIn: true })
      reducers.me.update(result)
    })
