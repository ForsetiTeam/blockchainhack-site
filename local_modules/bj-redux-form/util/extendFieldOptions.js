import { mapValues } from 'lodash'


const extendFieldOptions = (fieldOptions, linkedFields) =>
  mapValues(linkedFields, (opts, fieldName) => {
    if (opts.constructor.name === 'LinkAt') {
      opts.validate = fieldOptions[fieldName].validate
      return opts
    } else {
      return extendFieldOptions(fieldOptions[fieldName].fields, opts)
    }
  })

export default extendFieldOptions
