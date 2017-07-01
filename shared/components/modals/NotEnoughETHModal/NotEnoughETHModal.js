import React, { Component } from 'react'
import { modals } from 'helpers'

import DialogModal from 'components/modal/DialogModal'


export default class NotEnoughETHModal extends Component {

  static defaultProps = {
    name: modals.NotEnoughETH,
  }

  render() {
    const { name } = this.props

    return (
      <DialogModal
        name={name}
        title={'Not enough ETH'}
      >
        There are not enough funds on your wallet
      </DialogModal>
    )
  }
}
