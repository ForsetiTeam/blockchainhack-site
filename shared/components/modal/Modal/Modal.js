import React, { Component } from 'react'
import actions from 'redux/actions'
import PropTypes from 'bj-proptypes'

import cssModules from 'react-css-modules'
import styles from './Modal.scss'

import CloseIcon from 'components/controls/CloseIcon'


@cssModules(styles)
export default class Modal extends Component {

  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    isOpened: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    data: PropTypes.object,
    subText: PropTypes.node,
  }

  static defaultProps = {
    isOpened: false,
    showCloseButton: true,
  }

  close = () => {
    const { name, data, onClose } = this.props

    actions.modals.close(name)

    if (typeof onClose === 'function') {
      onClose()
    }
    if (data && typeof data.get('onClose') === 'function') {
      data.get('onClose')()
    }
  }

  render() {
    const { children, className, onClick, title, showCloseButton, subText } = this.props

    return (
      <div styleName="modal" className={className} onClick={onClick}>
        {
          Boolean(title || showCloseButton) && (
            <div styleName="header">
              {
                showCloseButton && (
                  <CloseIcon styleName="closeButton" onClick={this.close} />
                )
              }
              {
                Boolean(title) && (
                  <div styleName="title">{title}</div>
                )
              }
            </div>
          )
        }
        <div styleName="content">
          {children}
          {
            Boolean(subText) && (
              <div styleName="subText">
                {subText}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
