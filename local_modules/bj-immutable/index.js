import { Map } from 'immutable'


export * from 'immutable'

// https://lodash.com/docs/4.17.4#keyBy
export const keyBy = (list, getKey) => {
  let collection = Map()
  list.forEach((item) => {
    collection = collection.set(getKey(item), item)
  })
  return collection
}
