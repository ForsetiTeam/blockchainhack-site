import React, { Component } from 'react'
import actions from 'redux/actions'
import { modals } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './ConfirmCreateDealModal.scss'

import ConfirmModal from 'components/modal/ConfirmModal'


@cssModules(styles)
export default class ConfirmCreateDealModal extends Component {

  static defaultProps = {
    name: modals.ConfirmCreateDeal,
  }

  confirm = () => {
    const { data: { onConfirm } } = this.props

    if (typeof onConfirm === 'function') {
      onConfirm()
    }
    this.close()
  }

  close = () => {
    const { name } = this.props

    actions.modals.close(name)
  }

  render() {
    const { name, data: { totalPrice } } = this.props

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
          <span>Total amount:</span> <b>{totalPrice} ETH</b>
        </div>
      </ConfirmModal>
    )
  }
}
