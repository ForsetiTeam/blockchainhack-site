import { mapValues } from 'lodash'


const overrideFieldOptions = (fieldOptions) =>
  mapValues(fieldOptions, (opts) => {
    if (opts.fields) {
      opts.fields = overrideFieldOptions(opts.fields)
      return opts
    }

    // check if opts are array of validators
    if (Array.isArray(opts)) {
      return {
        validate: opts,
      }
    }

    return opts
  })

export default overrideFieldOptions
