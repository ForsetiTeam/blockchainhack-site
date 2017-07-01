import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Mobile.scss'

import Button from 'components/controls/Button'


const ConfirmModalMobile = ({ children, onConfirm, onCancel }) => (
  <div>
    {children}
    <Button styleName="confirmButton" brand fullWidth onClick={onConfirm}>Confirm</Button>
    <div styleName="footer">
      <Button whiteBrand back fullWidth onClick={onCancel}>Back</Button>
    </div>
  </div>
)

export default cssModules(ConfirmModalMobile, styles)
