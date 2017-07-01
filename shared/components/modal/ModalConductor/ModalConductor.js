import React, { Component } from 'react'
import Portal from 'react-portal'
import { connect } from 'redaction/immutable'
import { getScrollBarWidth } from 'helpers'

import ModalContainer from 'components/modal/ModalContainer'
import Modals from 'components/modals'


@connect({
  modals: 'modals',
})
export default class ModalConductor extends Component {

  componentWillReceiveProps({ modals }) {
    // When modal is showing add overflow: hidden to body and padding-right: ${scrollWidth}
    // to prevent screen from blinking
    if (modals.size) {
      document.body.classList.add('body-modal-opened')
      document.body.style.paddingRight = `${getScrollBarWidth()}px`
    } else {
      document.body.classList.remove('body-modal-opened')
      document.body.style.paddingRight = '0px'
    }
  }

  render() {
    const { modals } = this.props

    return (
      <Portal isOpened={true}>
        <div>
          {
            modals.valueSeq().map(({ name, zIndex, data = {} }) => (
              <ModalContainer key={zIndex} name={name} zIndex={zIndex}>
                {
                  React.createElement(Modals[name], { data })
                }
              </ModalContainer>
            ))
          }
        </div>
      </Portal>
    )
  }
}
