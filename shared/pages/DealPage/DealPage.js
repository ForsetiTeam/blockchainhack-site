import React, { Component } from 'react'
import Link from 'valuelink'
import actions from 'redux/actions'
import { modals } from 'helpers'
import cx from 'classnames'
import web3 from 'bj-web3'

import cssModules from 'react-css-modules'
import styles from './DealPage.scss'

import Input from 'components/forms/Input'
import TextArea from 'components/forms/TextArea'
import Button from 'components/controls/Button'

import attachment1 from './images/attachment-1.jpg'
import attachment2 from './images/attachment-2.jpg'
import attachment3 from './images/attachment-3.jpg'
import attachment4 from './images/attachment-4.jpg'


const attachments = [
  attachment1,
  attachment2,
  attachment3,
  attachment4,
]

const randomize = (min = 0, max = attachments.length - 1) => Math.floor(Math.random() * (max - min + 1)) + min
const getDumbAttachment = () => attachments[randomize()]


@cssModules(styles, { allowMultiple: true })
export default class DealPage extends Component {

  componentWillMount() {
    const data = actions.deal.get('0')

    console.log(444, data)
  }

  render() {
    const name = 'Top secret deal'
    const description = `
      Redaction is wrapper for reducers. The main purpose is to refuse from using constants and 
      dispatch method in code. There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and dispatch method in code. 
      There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and 
      dispatch method in code. There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and dispatch method in code. 
      There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and 
      dispatch method in code. There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and dispatch method in code. 
      There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and 
      dispatch method in code. There are Plain and Immutable versions. Redaction is wrapper for reducers. 
      The main purpose is to refuse from using constants and dispatch method in code. 
      There are Plain and Immutable versions.
    `

    return (
      <div>
        <div styleName="name">{name}</div>
        <div styleName="description">{description}</div>

        <div styleName="attachments">
          {
            Array
              .apply(null, {length: 7})
              .map(Number.call, Number)
              .map((num) => (
                <div key={num} styleName="attachmentContainer">
                  <div styleName="attachment">
                    <img styleName="preview" src={getDumbAttachment()} />
                  </div>
                </div>
              ))
          }
        </div>

        <div styleName="info">
          <div styleName="infoItem">
            <span>Total amount:</span> <b>101,5 ETH</b>
          </div>
          <div styleName="infoItem">
            <span>Accept date:</span> <b>07/05/2017</b>
          </div>
          <div styleName="infoItem">
            <span>Deal date:</span> <b>08/22/2017</b>
          </div>
        </div>

      </div>
    )
  }
}
