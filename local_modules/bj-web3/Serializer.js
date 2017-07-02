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

  functionsToObject(fnObj, callback) {
    const result = {}

    Promise.all(map(this.map, ({ key, modify = v => v }, fnKey) => new Promise((resolve) => {
      fnObj[fnKey].call((err, res) => {
        result[key || fnKey] = modify(res)
        resolve()
      })
    })))
      .then(() => {
        callback(result)
      })
  }
}

export default Serializer
