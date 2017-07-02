import { forEach, map } from 'lodash'


class Serializer {

  constructor(map) {
    this.map = map
  }

  arrToObject(arr) {
    const result = {}

    forEach(arr, (value, index) => {
      const { key, modify = v => v } = this.map[index]
      result[key] = modify(value)
    })

    return result
  }

  toArray(obj) {
    return map(this.map, ({ key }) => obj[key])
  }

  functionsToObject(fnObj) {
    const result = {}

    forEach(this.map, ({ key, modify = v => v }, fnKey) => {
      result[key || fnKey] = modify(fnObj[fnKey]())
    })

    return result
  }
}

export default Serializer
