import React from 'react'

import cssModules from 'react-css-modules'
import styles from './ModalFooter.scss'


const ModalFooter = ({ children }) => (
  <div styleName="modalFooter">
    {children}
  </div>
)

export default cssModules(ModalFooter, styles)
