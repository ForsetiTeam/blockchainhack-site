import { forEach, mapValues } from 'lodash'
import Link from 'valuelink'


const linkToState = function (fieldOptions, stateFields, at = []) {

  return mapValues(fieldOptions, (opts, fieldName) => {

    if (opts.fields) {
      return linkToState.call(this, opts.fields, stateFields[fieldName], [ ...at, fieldName ])
    }

    // const { value: initialValue } = opts

    let link = Link.state(this, 'fieldValues')
    if (at.length) {
      forEach(at, (fieldName) => link = link.at(fieldName))
    }
    link = link.at(fieldName)

    // const fieldCurrValue = stateFields[fieldName]
    // const isValueChanged = fieldCurrValue !== initialValue

    return link
  })
}

export default linkToState
