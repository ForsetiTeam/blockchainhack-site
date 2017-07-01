import { mapValues } from 'lodash'


const validateFields = (linkedFields) =>
  mapValues(linkedFields, (opts) => {
    if (opts.constructor.name === 'LinkAt') {
      opts.validate.some((validate) => {
        opts.error = validate(opts.value)
        return Boolean(opts.error)
      })
      return opts
    } else {
      return validateFields(opts)
    }
  })

export default validateFields
