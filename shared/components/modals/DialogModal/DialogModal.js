import React, { Component } from 'react'
import { modals } from 'helpers'

import DialogModalComponent from 'components/modal/DialogModal'


export default class DialogModal extends Component {

  static defaultProps = {
    name: modals.DialogModal,
  }

  render() {
    const { name, data: { title, content } } = this.props

    return (
      <DialogModalComponent
        name={name}
        title={title}
      >
        {content}
      </DialogModalComponent>
    )
  }
}
