import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import { Input as ValueLinkInput } from 'valuelink/tags'
import cx from 'classnames'
import { ignoreProps } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Input.scss'

import { AutosizeTextArea as TextArea } from 'components/forms/TextArea'


@cssModules(styles, { allowMultiple: true })
export default class Input extends Component {

  static propTypes = {
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    focusOnInit: PropTypes.bool,
    multiline: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.any,
    valueLink: PropTypes.object.isRequired,
  }

  static defaultProps = {
    className: '',
    inputClassName: '',
    focusOnInit: false,
    multiline: false,
    disabled: false,
    required: false,
    type: 'text',
  }

  renderCommonParts() {
    const {
      valueLink, inputClassName, focusOnInit, placeholder,
      multiline, disabled, label, required, type, ...rest,
    } = this.props

    const value         = valueLink.value
    const valuePresent  = value !== null && value !== undefined && value !== '' && !Number.isNaN(value)

    const inputStyleName = cx('input', {
      'labelExist': !!label,
      'filled': valuePresent,
    })

    const inputElement = React.createElement(multiline ? TextArea : ValueLinkInput, {
      ...ignoreProps(rest, 'styles', 'styleSpecial', 'maskChar'),
      styleName: inputStyleName,
      className: inputClassName,
      placeholder,
      valueLink,
      disabled: disabled || valueLink.readOnly,
      required,
      autoFocus: !!focusOnInit,
      type,
      dir: 'auto',
    })

    let labelElement
    if (label) {
      labelElement = (
        <label styleName="label">{label}</label>
      )
    }

    return (
      <div>
        {inputElement}
        {labelElement}
      </div>
    )
  }

  render() {
    const { valueLink, className, disabled, hidden } = this.props

    const error = valueLink.error

    const containerStyleName = cx('root', {
      'disabled': disabled || valueLink.readOnly,
      'errored': error,
      'hidden': hidden,
    })

    let errorNode

    if (error) {
      errorNode = (
        <div styleName="error">{error}</div>
      )
    }

    return (
      <div role="InputComponent" className={className}>
        <div styleName={containerStyleName}>
          {this.renderCommonParts()}
        </div>
        {Boolean(error) && errorNode}
      </div>
    )
  }
}
