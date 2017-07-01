import { mapValues } from 'lodash'


const getFieldValues = (fieldOptions) =>
  mapValues(fieldOptions, (opts) => {
    if (opts.fields) {
      return getFieldValues(opts.fields)
    }
    return opts.value === undefined || opts.value === null ? '' : opts.value
  })

export default getFieldValues
