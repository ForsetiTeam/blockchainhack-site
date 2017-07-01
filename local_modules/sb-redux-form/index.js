import React, { Component } from 'react'
import { Map } from 'immutable'
import { mapValues } from 'lodash'
import { getState, defaultsDeep } from 'helpers'
import { checkIsFormValid, overrideFieldOptions, extendFieldOptions,
  getFieldValues, linkToState, validateFields } from './util'


/**
 *
 * @param options {object}
 * @param options.name {string}
 * @param options.fields {object}
 * @param options.initialValues {function}
 */
const decorator = (options) => (ComposedComponent) => {

  class FormComponent extends Component {

    constructor() {
      super()

      this.name = null
      this.options = null

      this.state = {
        isSubmitted: false,
        fieldValues: null,
      }
    }

    componentDidMount() {
      this.configure(options)
    }

    componentWillReceiveProps(nextProps) {
      let { fieldValues } = this.state

      fieldValues = this.extendValuesFromProps(nextProps, fieldValues)

      this.setState({
        fieldValues,
      })
    }

    getInitialValues() {
      if (typeof this.options.initialValues === 'function') {
        return this.options.initialValues(getState())
      }
      return {}
    }

    extendValuesFromProps(props, fieldValues) {
      const plainJS = mapValues(props, (value) => {
        if (value instanceof Map) {
          return value.toJS()
        }
        return value
      })

      return defaultsDeep(fieldValues, plainJS)
    }

    configure = (options) => {
      this.name = options.name
      this.options = {
        ...options,
        fields: overrideFieldOptions(options.fields),
      }

      const fieldOptions = options.fields
      const initialValues = this.getInitialValues()
      let fieldValues

      fieldValues = getFieldValues(fieldOptions)
      fieldValues = defaultsDeep(fieldValues, initialValues)
      fieldValues = this.extendValuesFromProps(this.props, fieldValues)

      this.setState({
        fieldValues,
      })
    }

    onSubmit = (callback) => () => {
      const { fieldValues } = this.state
      const isFormValid = checkIsFormValid(this.options.fields, fieldValues)

      this.setState({
        isSubmitted: true,
      })

      if (isFormValid) {
        callback(fieldValues)
      }
    }

    render() {
      const { isSubmitted, fieldValues } = this.state

      if (!fieldValues) {
        return null
      }

      let linkedFields

      linkedFields = linkToState.bind(this)(this.options.fields, fieldValues)
      linkedFields = extendFieldOptions(this.options.fields, linkedFields)
      linkedFields = isSubmitted ? validateFields(linkedFields) : linkedFields

      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          fields={linkedFields}
          isFormValid={true}
          submitForm={this.onSubmit}
          updateFormOptions={this.configure}
        />
      )
    }
  }

  return FormComponent
}

export default decorator
