import React from 'react'
import PropTypes from 'bj-proptypes'
import { ignoreProps } from 'helpers'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Button.scss'

import Href from 'components/Href/Href'


const Button = (props) => {

  const width = props.w || props.width
  const height = props.h || props.height
  const type = props.submit && 'submit' || props.type
  const buttonStyle = {}
  const arrowStyle = {}

  let pl // padding left
  let pr // padding right
  const px = props.smallPadding ? Math.floor(height / 3) : height // horizontal padding
  const fs = height < 25 ? 10 : Math.floor(height / 2.5) // font size

  pl = pr = px

  if (props.arrowed) {
    pl = height
    pr = px * 1.5 + height
  }

  if (width) {
    buttonStyle.width = `${width}px`
  }

  buttonStyle.height      = `${height}px`
  buttonStyle.lineHeight  = `${height - 2}px`
  buttonStyle.padding     = `0 ${pr}px 0 ${pl}px`
  buttonStyle.fontSize    = `${fs}px`
  arrowStyle.transform    = `translateX(-${px / 1.5}px)`
  arrowStyle.right        = `${px}px`

  const styleName = cx('button', {
    'fullWidth': props.fullWidth,
    'uppercase': props.uppercase,
    'loading': props.loading,
    'brand': props.brand,
    'success': props.success,
    'info': props.info,
    'warning': props.warning,
    'gray': props.gray,
    'white': props.white,
    'whiteBrand': props.whiteBrand,
    'danger': props.danger,
    'disabled': props.disabled,
    'arrowed': props.arrowed,
  })

  const restProps = ignoreProps(props,
    'styles',
    'title',
    'titleValues',
    'w',
    'width',
    'h',
    'height',
    'submit',
    'fullWidth',
    'uppercase',
    'loading',
    'brand',
    'success',
    'info',
    'warning',
    'danger',
    'gray',
    'white',
    'whiteBrand',
    'disabled',
    'arrowed',
    'smallPadding',
  )

  const elProps = {
    ...restProps,
    styleName,
    type,
    style: buttonStyle,
  }

  if (props.to) {
    elProps.to = props.to
    elProps.customColor = true
    delete elProps.type
  }
  else if (props.redirect) {
    elProps.redirect = props.redirect
  }

  const node = props.to || props.redirect ? Href : 'button'

  const arrowNode = props.arrowed && (
    <div styleName="arrow" style={arrowStyle} />
  )
  const loaderNode = props.loading && (
    <div styleName="loader" />
  )

  const content = props.loading ? 'Loading...' : props.children || props.title

  return React.createElement(
    node,
    elProps,
    arrowNode,
    loaderNode,
    content,
  )
}

Button.propTypes = {
  children: PropTypes.node,
  title: PropTypes.object,
  w: PropTypes.number,
  width: PropTypes.number,
  h: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  submit: PropTypes.bool,
  fullWidth: PropTypes.bool,
  uppercase: PropTypes.bool,
  loading: PropTypes.bool,
  brand: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  gray: PropTypes.bool,
  white: PropTypes.bool,
  whiteBrand: PropTypes.bool,
  disabled: PropTypes.bool,
  arrowed: PropTypes.bool,
  smallPadding: PropTypes.bool, // horizontal padding
}

Button.defaultProps = {
  h: 40,
  type: 'button',
  submit: false,
  fullWidth: false,
  uppercase: true,
  loading: false,
  brand: false,
  success: false,
  info: false,
  warning: false,
  danger: false,
  gray: false,
  white: false,
  whiteBrand: false,
  disabled: false,
  arrowed: false,
  smallPadding: false,
}

export default cssModules(Button, styles, { allowMultiple: true })
