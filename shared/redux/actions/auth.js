import { reducers } from 'redux/core'
import request from 'sb-request'


export const login = () => reducers.auth.update({ isLoggedIn: true })
