import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import { Input } from 'valuelink/tags'
import cx from 'classnames'
import { ignoreProps } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './CheckBox.scss'


@cssModules(styles, { allowMultiple: true })
export default class CheckBox extends Component {

  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.any,
    children: PropTypes.node,
    valueLink: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    checked: false,
    disabled: false,
  }

  render() {
    const { children, className, valueLink, checked, readOnly, ...rest } = this.props

    const checkboxStyleName = cx('checkbox', {
      'disabled': readOnly,
    })

    const inputElement = React.createElement(valueLink ? Input : 'input', {
      ...ignoreProps(rest, 'styles'),
      styleName: 'input',
      type: 'checkbox',
      disabled: readOnly,
      readOnly,
      checked,
      valueLink,
    })

    return (
      <label styleName="root" className={className}>
        {inputElement}
        <div styleName={checkboxStyleName} />
        {
          children && (
            <span styleName="label">{children}</span>
          )
        }
      </label>
    )
  }
}
