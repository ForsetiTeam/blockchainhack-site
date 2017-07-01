import React, { Component } from 'react'
import actions from 'redux/actions'
import { modals } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './SuccessCreateDealModal.scss'

import ConfirmModal from 'components/modal/ConfirmModal'


@cssModules(styles)
export default class SuccessCreateDealModal extends Component {

  static defaultProps = {
    name: modals.SuccessCreateDeal,
  }

  confirm = () => {
    this.close()
  }

  close = () => {
    const { name } = this.props

    actions.modals.close(name)
  }

  render() {
    const { name } = this.props

    return (
      <ConfirmModal
        name={name}
        title={'Are you sure you want to create a deal?'}
        onConfirm={this.confirm}
        onCancel={this.close}
      >
        <ul styleName="warnings">
          <li>If your deal gets to arbitration, 8% of deposit will be deducted</li>
          <li>Service commission 1,5% , 1,5 ETH</li>
          <li>Funds from your wallet will be automatically sent for deposit</li>
        </ul>
        <div styleName="total">
          <span>Total amount:</span> <b>101,5 ETH</b>
        </div>
      </ConfirmModal>
    )
  }
}
