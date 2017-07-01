import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './WithHeaderLayout.scss'

import Header from 'components/header/Header'
import ActiveRouteTitle from 'components/ActiveRouteTitle'
import WidthContainer from 'components/WidthContainer'


@cssModules(styles)
export default class WithHeaderLayout extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <div styleName="headerContainer">
          <Header />
        </div>
        <WidthContainer main>
          <ActiveRouteTitle />
          {children}
        </WidthContainer>
      </div>
    )
  }
}
