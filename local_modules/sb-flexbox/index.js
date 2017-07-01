import React from 'react'
import { Flex, Box } from 'reflexbox'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './styles.scss'


const _Box = cssModules(({ children, ...rest }) => {
  const styleName = cx({
    'fixBoxWidth': rest.auto,
  })

  return (
    <Box styleName={styleName} {...rest}>{children}</Box>
  )
}, styles)


export {
  Flex,
  _Box as Box,
}
