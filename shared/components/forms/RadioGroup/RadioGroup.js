import React, { Component } from 'react'


export default class RadioGroup extends Component {

  static childContextTypes = {
    radioGroup: React.PropTypes.object
  }

  getChildContext() {
    const { name, valueLink } = this.props
    
    return {
      radioGroup: {
        name, valueLink
      }
    }
  }

  render() {
    const { children, ...rest } = this.props

    return (
      <div {...rest}>
        {children}
      </div>
    )
  }
}
