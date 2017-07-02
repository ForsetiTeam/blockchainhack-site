import React, { Component } from 'react'
import actions from 'redux/actions'
import PropTypes from 'bj-proptypes'
import { event } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './ModalContainer.scss'

import Overlay from 'components/Overlay'
import Center from 'components/Center'


@cssModules(styles)
export default class ModalContainer extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  handleMount = (el) => {
    if (el) {
      setTimeout(() => {
        el.classList.add(styles.mounted)
      }, 0)
    }
  }

  close = () => {
    const { name, onClose } = this.props

    actions.modals.close(name)

    if (typeof onClose === 'function') {
      onClose()
    }
  }

  render() {
    const { children, zIndex } = this.props

    return (
      <Overlay onClick={this.close} style={{ zIndex }}>
        <Center>
          <div
            styleName="modalContainer"
            ref={this.handleMount}
            onClick={event.stopPropagation}
          >
            {children}
          </div>
        </Center>
      </Overlay>
    )
  }
}
