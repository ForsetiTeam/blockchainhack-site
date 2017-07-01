import { Map } from 'immutable'
import cookie from 'react-cookie'


export const initialState = Map({
  isLoaderVisible: false,
  locale: cookie.load('locale') || 'en',
  headerActiveDropMenuName: null,
  profileInviteBlockVisible: JSON.parse(cookie.load('profileInviteBlockVisible') || true),
})

export const setLoaderVisibility = (state, payload) =>
  state.set('isLoaderVisible', payload)

export const setLocale = (state, payload) =>
  state.set('locale', payload)

export const setHeaderActiveDropMenuName = (state, payload /* name */) =>
  state.set('headerActiveDropMenuName', payload)

export const setProfileInviteBlockVisibility = (state, payload) =>
  state.set('profileInviteBlockVisible', payload)
