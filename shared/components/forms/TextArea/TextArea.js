import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'bj-proptypes'
import autosize from 'autosize'

import cssModules from 'react-css-modules'
import styles from './TextArea.scss'


const UPDATE  = 'autosize:update'
const DESTROY = 'autosize:destroy'
const RESIZED = 'autosize:resized'


@cssModules(styles)
export default class Textarea extends Component {

  static propTypes = {
    onResize: PropTypes.func
  }

  static defaultProps = {
    rows: 5,
  }

  getTextareaDOMNode = () => {
    if (this.refs.textarea.nodeType === 1) {
      return this.refs.textarea
    } else {
      return ReactDOM.findDOMNode(this.refs.textarea)
    }
  }

  componentDidMount() {
    autosize(this.getTextareaDOMNode())

    if (this.props.onResize) {
      this.getTextareaDOMNode().addEventListener(RESIZED, this.props.onResize)
    }
  }

  componentWillUnmount() {
    if (this.props.onResize) {
      this.getTextareaDOMNode().removeEventListener(RESIZED, this.props.onResize)
    }

    this.dispatchEvent(DESTROY)
  }

  componentWillReceiveProps(nextProps) {
    if (this.getValue(nextProps) !== this.getValue(this.props)) {
      this.dispatchEvent(UPDATE, true)
    }
  }

  dispatchEvent = (EVENT_TYPE, defer) => {
    const event = document.createEvent('Event')

    event.initEvent(EVENT_TYPE, true, false)

    const dispatch = () => this.getTextareaDOMNode().dispatchEvent(event)

    if (defer) {
      setTimeout(dispatch)
    } else {
      dispatch()
    }
  }

  getValue = ({ valueLink, value }) => valueLink ? valueLink.value : value

  render() {
    const { valueLink, ...props } = this.props

    return (
      <textarea
        styleName="textarea"
        ref="textarea"
        {...props}
        value={valueLink.value}
        onChange={valueLink.action((x, e) => e.target.value)}
      />
    )
  }
}
