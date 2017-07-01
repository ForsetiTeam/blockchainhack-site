import { reducers } from 'redux/core'


export const open = (name, data) => reducers.modals.open({ name, data })

export const close = reducers.modals.close

export const update = (name, data) => reducers.modals.update({ name, data })
