import React, { Component } from 'react'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './DealPage.scss'

import Attachments from 'components/Attachments'


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
        <Attachments styleName="attachments" count={7} />
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
