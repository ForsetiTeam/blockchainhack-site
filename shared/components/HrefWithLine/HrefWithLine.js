import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './HrefWithLine.scss'

import Href from 'components/Href'


const HrefWithLine = ({ children, isActive, ...rest }) => {
  const styleName = cx('link', {
    'active': isActive,
  })

  return (
    <Href styleName={styleName} activeClassName={styles.active} {...rest}>{children}</Href>
  )
}

export default cssModules(HrefWithLine, styles, { allowMultiple: true })
