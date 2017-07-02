import React from 'react'
import { Flex, Box } from 'bj-flexbox'

import cssModules from 'react-css-modules'
import styles from './ExceptMobile.scss'

import Button from 'components/controls/Button'


const ConfirmModalExceptMobile = ({ children, onConfirm, onCancel }) => (
  <div>
    {children}
    <Flex styleName="buttons" justify="center">
      <Box pr={1}>
        <Button whiteBrand onClick={onCancel}>Back</Button>
      </Box>
      <Box pl={1}>
        <Button brand onClick={onConfirm}>Confirm</Button>
      </Box>
    </Flex>
  </div>
)

export default cssModules(ConfirmModalExceptMobile, styles)
