import React, { Component } from 'react'
import Link from 'valuelink'
import actions from 'redux/actions'
import { modals } from 'helpers'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './EditDealPage.scss'

import Input from 'components/forms/Input'
import TextArea from 'components/forms/TextArea'
import Button from 'components/controls/Button'

import attachment1 from './images/attachment-1.jpg'
import attachment2 from './images/attachment-2.jpg'
import attachment3 from './images/attachment-3.jpg'
import attachment4 from './images/attachment-4.jpg'


const attachments = [
  attachment1,
  attachment2,
  attachment3,
  attachment4,
]

const randomize = (min = 0, max = attachments.length - 1) => Math.floor(Math.random() * (max - min + 1)) + min
const getDumbAttachment = () => attachments[randomize()]


@cssModules(styles, { allowMultiple: true })
export default class EditDealPage extends Component {

  constructor() {
    super()

    this.state = {
      attachmentCount: 0,
      name: '',
      description: '',
      walletAddress: '',
      depositAmount: '',
      dealDateDate: '',
      executionDate: '',
    }
  }

  render() {
    const linked = Link.all(this, ...Object.keys(this.state))
    
    const isEditing = window.location.pathname === '/deal/edit'

    const totalPriceStyleName = cx('total', {
      'disabled': isEditing,
    })

    return (
      <div styleName="form">
        <Input styleName="rowField" valueLink={linked.name} label="Name" />
        <TextArea styleName="rowField" valueLink={linked.description} placeholder="Description" />

        <Input styleName="rowField" valueLink={linked.walletAddress} label="Wallet address" />
        <div styleName="fieldDescription">
          The ETH wallet address of the second counterparty of the deal
        </div>

        <Input styleName="rowField" valueLink={linked.depositAmount} label="Deposit in ETH" disabled={isEditing} />
        <div styleName="fieldDescription">
          The Deposit will be transferred to the counterparty upon the execution of the deal,
          or returned to you if the deal doesn't go through.<br />
          If your deal gets to arbitration, 8% of this amount will be deducted
        </div>

        <Input styleName="rowField" valueLink={linked.dealDateDate} label="Accept date" />
        <div styleName="fieldDescription">
          Date to which the counterparty must accept the deal.
          If counterparty doesn't accept deal, the funds are returned to wallet
        </div>

        <Input styleName="rowField" valueLink={linked.executionDate} label="Execution date" />
        <div styleName="fieldDescription">Date of deal execution</div>

        <Button h={46} styleName="rowField" whiteBrand onClick={() => {
          linked.attachmentCount.set(linked.attachmentCount.value + 1)
        }}>Attach files</Button>

        <div styleName="attachments">
          {
            Array
              .apply(null, {length: linked.attachmentCount.value})
              .map(Number.call, Number)
              .map((num) => (
                <div key={num} styleName="attachmentContainer">
                  <div styleName="attachment">
                    <img styleName="preview" src={getDumbAttachment()} />
                  </div>
                </div>
              ))
          }
        </div>

        <ul styleName="warning">
          <li>Funds from your wallet will be automatically sent for deposit!</li>
          <li>You will pay a commission for the service in <b>1,5%</b>!</li>
        </ul>

        <div styleName={totalPriceStyleName}>
          <span>Total amount:</span> <b>101,5 ETH</b>
        </div>

        <Button
          styleName="submitButton"
          h={56}
          brand
          onClick={() => {
            actions.deal.create()
            actions.modals.open(modals.SuccessCreateDeal)
          }}
        >Create Deal</Button>
      </div>
    )
  }
}
