import React, { Component } from 'react'
import ReactDatePicker from 'react-datepicker'

import './DatePicker.scss'


export default class DatePicker extends Component {

  render() {
    const { className, valueLink } = this.props

    return (
      <div className={className}>
        <ReactDatePicker
          selected={valueLink.value}
          onChange={(value) => valueLink.set(value)}
        />
      </div>
    )
  }
}
