import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import actions from 'redux/actions'
import { connect } from 'redaction/immutable'
import { links } from 'helpers'
import moment from 'moment'

import cssModules from 'react-css-modules'
import styles from './DealsPage.scss'

import InfoTable from 'components/InfoTable'
import HrefWithLine from 'components/HrefWithLine'
import CreateDealButton from 'components/controls/buttons/CreateDealButton'


@connect({
  deals: 'deals',
})
@cssModules(styles)
export default class DealsPage extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentWillMount() {
    actions.deals.get()
  }

  handleRowClick = (rowData) => {
    actions.router.push(links.abs.deal.replace(':address', rowData.address))
  }

  render() {
    const { router: { location: { pathname } } } = this.context
    const { deals } = this.props

    const isCustomer = /\/customer/.test(pathname)

    const columns = [
      { name: 'title', title: 'Title' },
      { name: isCustomer ? 'customerStatus' : 'contractorStatus', title: 'Status' },
      { name: 'deposit', title: 'Deposit', render: v => `${v} ETH` },
      { name: 'closeTime', title: 'Deal date', render: v => moment(v).format('MM/DD/YYYY') },
    ]

    return (
      <div>
        <div styleName="nav">
          <HrefWithLine styleName="navItem" to={links.abs.customerDeals}>Customer</HrefWithLine>
          <HrefWithLine styleName="navItem" to={links.abs.contractorDeals}>Contractor</HrefWithLine>
        </div>
        {
          Boolean(deals) && (
            <InfoTable columns={columns} data={deals.toJS()} onRowClick={this.handleRowClick} />
          )
        }
        {
          isCustomer && (
            <CreateDealButton styleName="createDealButton" brand />
          )
        }
      </div>
    )
  }
}
