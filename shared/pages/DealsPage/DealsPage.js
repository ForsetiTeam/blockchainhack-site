import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import actions from 'redux/actions'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './DealsPage.scss'

import InfoTable from 'components/InfoTable'
import HrefWithLine from 'components/HrefWithLine'
import CreateDealButton from 'components/controls/buttons/CreateDealButton'


@cssModules(styles)
export default class DealsPage extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  handleRowClick = (rowData) => {
    actions.router.push(links.abs.deal)
  }

  render() {
    const { router: { location: { pathname } } } = this.context

    const isCustomer = /\/customer/.test(pathname)

    const columns = [
      { name: 'name', title: 'Name' },
      { name: 'status', title: 'Status' },
      { name: 'deposit', title: 'Deposit' },
      { name: 'dealDate', title: 'Deal date' },
    ]

    const data = [
      {
        id: 1,
        name: 'Buy crocodile from Mike',
        status: 'Confirmed',
        deposit: '12 ETH',
        dealDate: '11/25/2017',
      },
      {
        id: 2,
        name: 'Buy crocodile from Mike',
        status: 'Confirmed',
        deposit: '12 ETH',
        dealDate: '11/25/2017',
      },
      {
        id: 3,
        name: 'Buy crocodile from Mike',
        status: 'Confirmed',
        deposit: '12 ETH',
        dealDate: '11/25/2017',
      },
      {
        id: 4,
        name: 'Buy crocodile from Mike',
        status: 'Confirmed',
        deposit: '12 ETH',
        dealDate: '11/25/2017',
      },
      {
        id: 5,
        name: 'Buy crocodile from Mike',
        status: 'Confirmed',
        deposit: '12 ETH',
        dealDate: '11/25/2017',
      },
    ]

    return (
      <div>
        <div styleName="nav">
          <HrefWithLine styleName="navItem" to={links.abs.customerDeals}>Customer</HrefWithLine>
          <HrefWithLine styleName="navItem" to={links.abs.contractorDeals}>Contractor</HrefWithLine>
        </div>
        <InfoTable columns={columns} data={data} onRowClick={this.handleRowClick} />
        {
          isCustomer && (
            <CreateDealButton styleName="createDealButton" brand />
          )
        }
      </div>
    )
  }
}
