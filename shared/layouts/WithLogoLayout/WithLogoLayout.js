import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './WithLogoLayout.scss'

import ActiveRouteTitle from 'components/ActiveRouteTitle'
import HeaderContainer from 'components/header/HeaderContainer'
import WidthContainer from 'components/WidthContainer'


@cssModules(styles)
export default class WithLogoLayout extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <HeaderContainer>
          <div styleName="logo">
            BlockJudge
          </div>
        </HeaderContainer>
        <WidthContainer main>
          <ActiveRouteTitle />
          {children}
        </WidthContainer>
      </div>
    )
  }
}
