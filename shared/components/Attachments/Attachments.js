import React, { Component } from 'react'

import cssModules from 'react-css-modules'
import styles from './Attachments.scss'

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


@cssModules(styles)
export default class Attachments extends Component {

  render() {
    const { className, count = randomize(4, 9) } = this.props

    return (
      <div styleName="attachments" className={className}>
        {
          Array
            .apply(null, { length: count })
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
    )
  }
}
