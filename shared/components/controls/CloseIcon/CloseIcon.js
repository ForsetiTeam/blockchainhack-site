import React from 'react'

import cssModules from 'react-css-modules'
import styles from './CloseIcon.scss'


const CloseIcon = (props) => (
  <div styleName="icon" {...props} />
)

export default cssModules(CloseIcon, styles, { allowMultiple: true })
