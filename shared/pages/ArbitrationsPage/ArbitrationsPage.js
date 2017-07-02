import React, { Component } from 'react'
import actions from 'redux/actions'
import { event, links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './ArbitrationsPage.scss'

import Href from 'components/Href'
import InfoTable from 'components/InfoTable'


@cssModules(styles)
export default class ArbitrationsPage extends Component {

  handleRowClick = (rowData) => {
    actions.router.push(links.abs.arbitration)
  }

  renderDealNameCell(cellValue, rowData) {
    return (
      <Href to={links.abs.deal} onClick={event.stopPropagation}>{cellValue}</Href>
    )
  }

  render() {
    const columns = [
      { name: 'dealName', title: 'Deal', render: this.renderDealNameCell },
      { name: 'status', title: 'Status' },
      { name: 'dealDate', title: 'Deal date' },
    ]

    const data = [
      {
        id: 1,
        dealName: 'Buy crocodile from Mike',
        status: 'Confirmed',
        dealDate: '11/25/2017',
      },
      {
        id: 2,
        dealName: 'Buy crocodile from Mike',
        status: 'Confirmed',
        dealDate: '11/25/2017',
      },
      {
        id: 3,
        dealName: 'Buy crocodile from Mike',
        status: 'Confirmed',
        dealDate: '11/25/2017',
      },
      {
        id: 4,
        dealName: 'Buy crocodile from Mike',
        status: 'Confirmed',
        dealDate: '11/25/2017',
      },
    ]

    return (
      <div>
        <InfoTable columns={columns} data={data} onRowClick={this.handleRowClick} />
      </div>
    )
  }
}
