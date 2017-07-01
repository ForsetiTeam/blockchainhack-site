import React from 'react'
import PropTypes from 'sb-proptypes'

import cssModules from 'react-css-modules'
import styles from './Center.scss'


const Center = ({ children, ...rest }) => (
  <div styleName="centringContainer" {...rest}>
    <div styleName="centringContent">
      {children}
    </div>
  </div>
)

Center.propTypes = {
  children: PropTypes.node,
}

export default cssModules(Center, styles)
