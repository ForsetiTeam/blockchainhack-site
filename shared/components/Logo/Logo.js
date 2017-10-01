import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Logo.scss'

import Href from 'components/Href/Href'

import logo from './images/logo.png'


const Logo = ({ titleExist, ...rest }) => (
  <Href styleName="logo" to="/" {...rest}>
    <img styleName="image" src={logo} />
    {
      titleExist && (
        <div styleName="title" role="title">
          Forseti
        </div>
      )
    }
  </Href>
)

Logo.defaultProps = {
  titleExist: true,
}

export default cssModules(Logo, styles)
