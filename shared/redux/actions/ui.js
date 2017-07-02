import { reducers } from 'redux/core'


export const showLoader = () => reducers.ui.setLoaderVisibility(true)
export const hideLoader = () => reducers.ui.setLoaderVisibility(false)
