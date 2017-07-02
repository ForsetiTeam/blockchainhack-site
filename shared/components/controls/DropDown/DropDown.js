import React, { Component } from 'react'
import NativeListener from 'react-native-listener'
import PropTypes from 'bj-proptypes'
import Collapse from 'react-collapse'


export default class DropDown extends Component {

  static propTypes = {
    clickItemClassName: PropTypes.string,
    dropListClassName: PropTypes.string,
  }

  constructor() {
    super()

    this.state = {
      opened: false,
    }
  }

  componentWillMount() {
    this.bindListeners()
  }

  componentWillUnmount() {
    this.unbindListeners()
  }

  bindListeners() {
    document.addEventListener('click', this.close)
  }

  unbindListeners() {
    document.removeEventListener('click', this.close)
  }

  toggle = (event) => {
    const { opened } = this.state

    event.stopPropagation()

    this.setState({
      opened: !opened,
    })
  }

  close = () => {
    this.setState({
      opened: false,
    })
  }

  render() {
    const { opened } = this.state
    const { children, clickItemClassName, dropListClassName } = this.props

    return (
      <div>
        <NativeListener className={clickItemClassName} onClick={this.toggle}>
          {children[0]}
        </NativeListener>
        <Collapse
          className={dropListClassName}
          isOpened={opened}
          springConfig={{ stiffness: 250, damping: 20 }}
        >
          {children.slice(1)}
        </Collapse>
      </div>
    )
  }
}
