import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import actions from 'redux/actions'

import Button from 'components/controls/Button'
import Modal from 'components/modal/Modal'
import ModalFooter from 'components/modal/ModalFooter'


export default class DialogModal extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    subText: PropTypes.node,
  }

  close = () => {
    const { name } = this.props

    actions.modals.close(name)
  }

  render() {
    const { children, name, title, subText, buttonTitle = 'Finish' } = this.props

    return (
      <Modal
        name={name}
        title={title}
        subText={subText}
      >
        {children}
        <ModalFooter>
          <Button brand h={45} title={buttonTitle} onClick={this.close} />
        </ModalFooter>
      </Modal>
    )
  }
}
