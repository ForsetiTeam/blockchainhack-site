import React, { Component } from 'react'
import actions from 'redux/actions'
import { event, links } from 'helpers'
import { connect } from 'redaction/immutable'
import moment from 'moment'

import cssModules from 'react-css-modules'
import styles from './ArbitrationsPage.scss'

import Href from 'components/Href'
import InfoTable from 'components/InfoTable'


@connect({
  arbitrations: 'arbitrations',
})
@cssModules(styles)
export default class ArbitrationsPage extends Component {

  componentWillMount() {
    actions.arbitrations.get()
  }

  handleRowClick = (rowData) => {
    //actions.router.push(links.abs.arbitration.replace(':address', rowData))
  }

  renderDealNameCell(cellValue, rowData) {
    return (
      <Href to={links.abs.deal} onClick={event.stopPropagation}>{cellValue}</Href>
    )
  }

  render() {
    const { arbitrations } = this.props

    const columns = [
      { name: 'title', title: 'Deal', render: this.renderDealNameCell },
      { name: 'customerStatus', title: 'Status' },
      { name: 'closeTime', title: 'Deal date', render: v => moment(v).format('MM/DD/YYYY') },
    ]

    return (
      <div>
        <InfoTable columns={columns} data={arbitrations.toJS()} onRowClick={this.handleRowClick} />
      </div>
    )
  }
}
