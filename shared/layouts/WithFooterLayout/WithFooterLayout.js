import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './WithFooterLayout.scss'

import Footer from 'components/Footer'


@cssModules(styles)
export default class WithFooterLayout extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <div styleName="contentContainer">
          {children}
        </div>
        <div styleName="footerContainer">
          <Footer />
        </div>
      </div>
    )
  }
}
