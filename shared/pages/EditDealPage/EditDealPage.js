import React, { Component } from 'react'
import Link from 'valuelink'
import actions from 'redux/actions'
import { links, modals } from 'helpers'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './EditDealPage.scss'

import Input from 'components/forms/Input'
import TextArea from 'components/forms/TextArea'
import DatePicker from 'components/forms/DatePicker'
import Button from 'components/controls/Button'
import Attachments from 'components/Attachments'


@cssModules(styles, { allowMultiple: true })
export default class EditDealPage extends Component {

  constructor() {
    super()

    this.state = {
      attachmentCount: 0,
      fields: {
        title: '',
        description: '',
        contractorAddress: '',
        deposit: '',
        openTime: '',
        closeTime: '',
      },
    }
  }

  componentWillMount() {
    const { params: { address } } = this.props

    if (address) {
      actions.deals.get(address)
    }
  }

  submit = () => {
    const { fields } = this.state

    const totalPrice  = Math.round(((fields.deposit || 0) * 1.015) * 1e12) / 1e12

    actions.modals.open(modals.ConfirmCreateDeal, {
      totalPrice,
      onConfirm: () => {
        actions.deal.create(fields).then((address) => {
          // actions.router.push(links.abs.deal.replace(':address', address))
          actions.router.push(links.abs.customerDeals)
        })
      },
    })
  }

  render() {
    const linked = Link.all(this, 'attachmentCount')
    Object.keys(this.state.fields)
      .forEach((fieldName) => linked[fieldName] = Link.state(this, 'fields').at(fieldName))

    const totalPrice  = Math.round(((linked.deposit.value || 0) * 1.015) * 1e12) / 1e12
    const isEditing   = window.location.pathname === '/deal/edit'

    const totalPriceStyleName = cx('total', {
      'disabled': isEditing,
    })

    return (
      <div styleName="form">
        <Input styleName="rowField" valueLink={linked.title} label="Title" />
        <TextArea styleName="rowField" valueLink={linked.description} placeholder="Description" />

        <Input styleName="rowField" valueLink={linked.contractorAddress} label="Wallet address" />
        <div styleName="fieldDescription">
          The ETH wallet address of the second counterparty of the deal
        </div>

        <Input styleName="rowField" valueLink={linked.deposit} label="Deposit in ETH" disabled={isEditing} />
        <div styleName="fieldDescription">
          The Deposit will be transferred to the counterparty upon the execution of the deal,
          or returned to you if the deal doesn't go through.<br />
          If your deal gets to arbitration, 8% of this amount will be deducted
        </div>

        <DatePicker styleName="rowField" valueLink={linked.openTime} label="Accept date" />
        <div styleName="fieldDescription">
          Date to which the counterparty must accept the deal.
          If counterparty doesn't accept deal, the funds are returned to wallet
        </div>

        <DatePicker styleName="rowField" valueLink={linked.closeTime} label="Deal date" />
        <div styleName="fieldDescription">Date of deal execution</div>

        <Button h={46} styleName="rowField" whiteBrand onClick={() => {
          linked.attachmentCount.set(linked.attachmentCount.value + 1)
        }}>Attach files</Button>
        <Attachments styleName="attachments" count={linked.attachmentCount.value} />

        <ul styleName="warning">
          <li>Funds from your wallet will be automatically sent for deposit!</li>
          <li>You will pay a commission for the service in <b>1,5%</b>!</li>
        </ul>

        <div styleName="totalContainer">
          <div styleName={totalPriceStyleName}>
            <span>Total amount:</span> <b>{totalPrice} ETH</b>
          </div>
        </div>

        <Button
          styleName="submitButton"
          h={56}
          brand
          onClick={this.submit}
        >Create Deal</Button>
      </div>
    )
  }
}
