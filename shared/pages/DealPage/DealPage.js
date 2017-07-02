import React, { Component } from 'react'
import actions from 'redux/actions'
import { connect } from 'redaction/immutable'
import moment from 'moment'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './DealPage.scss'

import Button from 'components/controls/Button'
import Attachments from 'components/Attachments'


@connect({
  deal: 'deal',
})
@cssModules(styles, { allowMultiple: true })
export default class DealPage extends Component {

  componentWillMount() {
    const { params: { address } } = this.props

    actions.deal.cleanState()
    actions.deal.getOnce(address)
  }

  openArbitrage = () => {
    const { params: { address } } = this.props

    actions.router.push(links.abs.arbitration.replace(':address', address))
  }

  render() {
    const { deal } = this.props

    if (!deal.size) {
      return
    }

    const { deal: { title, description, deposit, openTime, closeTime, statuses: { arbitraged } } } = this.props

    return (
      <div>
        <div styleName="title">{title}</div>
        <div styleName="description">{description}</div>
        <Attachments styleName="attachments" />
        <div styleName="info">
          <div styleName="infoItem">
            <span>Total amount:</span> <b>{deposit} ETH</b>
          </div>
          <div styleName="infoItem">
            <span>Accept date:</span> <b>{moment(openTime).format('MM/DD/YYYY')}</b>
          </div>
          <div styleName="infoItem">
            <span>Deal date:</span> <b>{moment(closeTime).format('MM/DD/YYYY')}</b>
          </div>
        </div>
        {
          !arbitraged && (
            <Button styleName="openArbitrageButton" danger onClick={this.openArbitrage}>Open arbitration</Button>
          )
        }
      </div>
    )
  }
}
