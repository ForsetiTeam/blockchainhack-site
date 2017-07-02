import React, { Component } from 'react'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'
import { reducers } from 'redux/core'
import { links } from 'helpers'

import RequestLoader from 'components/RequestLoader'
import ModalConductor from 'components/modal/ModalConductor'

import './App.scss'
import 'react-datepicker/dist/react-datepicker.css'


@connect({
  isLoggedIn: 'auth.isLoggedIn',
  gender: 'me.gender',
})
export default class App extends Component {

  componentWillMount() {
    // console.log('links', links)
    // console.log('actions', actions)
    // console.log('reducers', reducers)
  }

  render() {
    const { children } = this.props
    
    return (
      <div>
        {children}
        <RequestLoader />
        <ModalConductor />
      </div>
    )
  }
}
