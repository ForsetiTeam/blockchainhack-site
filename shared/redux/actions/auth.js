import { reducers } from 'redux/core'


export const login = () => reducers.auth.update({ isLoggedIn: true })
