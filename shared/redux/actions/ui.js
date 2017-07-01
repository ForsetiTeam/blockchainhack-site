import { reducers } from 'redux/core'
import { getState } from 'helpers'


export const showLoader = () => reducers.ui.setLoaderVisibility(true)

export const hideLoader = () => reducers.ui.setLoaderVisibility(false)

export const toggleHeaderDropMenuVisibility = (dropMenuName) => {
  const { ui: { headerActiveDropMenuName } } = getState()
  const value = headerActiveDropMenuName === dropMenuName ? null : dropMenuName

  reducers.ui.setHeaderActiveDropMenuName(value)
}
