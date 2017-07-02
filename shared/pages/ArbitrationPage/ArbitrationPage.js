import React, { Component } from 'react'
import Link from 'valuelink'

import cssModules from 'react-css-modules'
import styles from './ArbitrationPage.scss'

import Button from 'components/controls/Button'
import TextArea from 'components/forms/TextArea'
import Attachments from 'components/Attachments'


@cssModules(styles)
export default class ArbitrationPage extends Component {

  constructor() {
    super()

    this.state = {
      attachmentCount: 0,
      argument: '',
    }
  }

  render() {
    const linked = Link.all(this, ...Object.keys(this.state))

    return (
      <div styleName="form">
        <ul styleName="warning">
          <li>Be careful, you can send the argument only once, and it can not be edited!</li>
          <li>You can send arguments up to 22 june!</li>
        </ul>

        <TextArea styleName="rowField" valueLink={linked.argument} placeholder="Argument" />

        <Button h={46} styleName="rowField" whiteBrand onClick={() => {
          linked.attachmentCount.set(linked.attachmentCount.value + 1)
        }}>Attach files</Button>
        <Attachments styleName="attachments" count={linked.attachmentCount.value} />

        <Button
          styleName="submitButton"
          h={56}
          brand
          onClick={() => {

          }}
        >Send Argument</Button>
      </div>
    )
  }
}
