import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Loader.scss'

import loaderImage from './images/bird-loader.gif'


const Loader = ({ className, onClick }) => (
  <div styleName="loaderContainer" className={className} onClick={onClick}>
    <img styleName="loader" src={loaderImage} />
  </div>
)

export default cssModules(Loader, styles)

