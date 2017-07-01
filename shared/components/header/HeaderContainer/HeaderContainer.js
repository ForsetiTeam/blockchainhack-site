import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './HeaderContainer.scss'

import WidthContainer from 'components/WidthContainer'


@cssModules(styles)
export default class HeaderContainer extends Component {

  render() {
    const { children } = this.props

    return (
      <header styleName="header">
        <WidthContainer>
          {children}
        </WidthContainer>
      </header>
    )
  }
}
