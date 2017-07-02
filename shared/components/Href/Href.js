import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'bj-proptypes'
import { ignoreProps } from 'helpers'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Href.scss'


const Href = ({
  children, title, to, redirect, mailto,
  blackColor, brandColor, blackToBrandColor, customColor,
  ...rest,
}) => {

  const styleName = cx('link', {
    'commonColor': !customColor && !brandColor && !blackColor,
    'brandColor': brandColor,
    'blackColor': blackColor,
    'blackToBrandColor': blackToBrandColor,
  })
  
  const props = ignoreProps(rest, 'activeClassName')

  if (!to && !redirect && !mailto) {
    return (
      <span styleName={styleName} {...props}>
        {children || title}
      </span>
    )
  }

  if (typeof to !== 'undefined') {
    return (
      <Link
        styleName={styleName}
        to={to}
        {...rest}
      >
        {children || title}
      </Link>
    )
  }

  if (typeof redirect !== 'undefined') {
    return (
      <a
        styleName={styleName}
        href={redirect}
        target={redirect ? '_blank' : null}
        rel="noopener noreferrer nofollow"
        {...props}
      >
        {content}
      </a>
    )
  }

  if (typeof mailto !== 'undefined') {
    return (
      <a
        styleName={styleName}
        href={`mailto:${mailto}`}
        {...props}
      >
        {content}
      </a>
    )
  }
}

Href.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  to: PropTypes.string,
  redirect: PropTypes.string,
  mailto: PropTypes.string,
  brandColor: PropTypes.bool,
  blackColor: PropTypes.bool,
  blackToBrandColor: PropTypes.bool,
  customColor: PropTypes.bool,
}

Href.defaultProps = {
  brandColor: false,
  blackColor: false,
  customColor: false,
}

export default cssModules(Href, styles, { allowMultiple: true })
