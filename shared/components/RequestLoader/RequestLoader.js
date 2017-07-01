import React from 'react'
import Portal from 'react-portal'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './RequestLoader.scss'

import Loader from 'components/Loader'


const RequestLoader = ({ isVisible }) => (
  <Portal isOpened={isVisible}>
    <Loader styleName="requestLoader" />
  </Portal>
)

export default connect({
  isVisible: 'ui.isLoaderVisible',
})(cssModules(RequestLoader, styles))
