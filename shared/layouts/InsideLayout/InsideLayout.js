import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './InsideLayout.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'


@cssModules(styles)
export default class InsideLayout extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <div styleName="headerContainer">
          <Header />
        </div>
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
