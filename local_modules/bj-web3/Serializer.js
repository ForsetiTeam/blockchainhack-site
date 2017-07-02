import SolidityCoder from 'web3/lib/solidity/coder'
import { forEach, map } from 'lodash'


class Serializer {

  constructor(map) {
    this.map = map
  }

  hashToObject(hash) {
    const result      = {}
    const decodeList  = map(this.map, ({ decode }) => decode)
    const data        = SolidityCoder.decodeParams(decodeList, hash)

    forEach(data, (value, index) => {
      const { key, modify = v => v } = this.map[index]
      result[key] = modify(value)
    })

    return result
  }

  toArray(obj) {
    return map(this.map, ({ key }) => obj[key])
  }
}

export default Serializer
