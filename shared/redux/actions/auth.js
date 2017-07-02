import { reducers } from 'redux/core'
import request from 'bj-request'


export const login = () => reducers.auth.update({ isLoggedIn: true })
