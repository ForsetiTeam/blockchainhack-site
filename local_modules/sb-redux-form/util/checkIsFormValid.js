import { every } from 'lodash'


const checkIsFormValid = (fieldOptions, fieldValues) =>
  every(fieldOptions, (opts, fieldName) => {
    if (opts.fields) {
      return checkIsFormValid(opts.fields, fieldValues[fieldName])
    }
    return every(opts.validate, (validate) => validate(fieldValues[fieldName]))
  })

export default checkIsFormValid
