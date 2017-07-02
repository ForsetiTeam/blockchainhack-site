import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import Media from 'bj-media'

import Modal from 'components/modal/Modal'

import ExceptMobile from './ExceptMobile'
import Mobile from './Mobile'


export default class ConfirmModal extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  confirm = () => {
    const { onConfirm } = this.props

    if (typeof onConfirm === 'function') {
      onConfirm()
    }
  }

  cancel = () => {
    const { onCancel } = this.props

    if (typeof onCancel === 'function') {
      onCancel()
    }
  }

  render() {
    const { children, name, title } = this.props

    return (
      <Modal name={name} title={title}>
        <Media mobile>
          {
            (matches) => React.createElement(matches ? Mobile : ExceptMobile, {
              onConfirm: this.confirm,
              onCancel: this.cancel,
            }, children)
          }
        </Media>
      </Modal>
    )
  }
}
