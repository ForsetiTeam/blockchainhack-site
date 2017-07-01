import React, { Component } from 'react'
import { Flex, Box } from 'sb-flexbox'
import actions from 'redux/actions'
import Link from 'valuelink'

import cssModules from 'react-css-modules'
import styles from './LoginPage.scss'

import Input from 'components/forms/Input'
import TextArea from 'components/forms/TextArea'
import RadioGroup from 'components/forms/RadioGroup'
import RadioButton from 'components/forms/RadioButton'
import Button from 'components/controls/Button'


@cssModules(styles)
export default class LoginPage extends Component {

  constructor() {
    super()

    this.state = {
      type: 'privateKey',
      key: '',
      password: '',
    }
  }

  submit = () => {
    actions.auth.login()
    actions.router.push('/deals')
  }

  render() {
    const linked = Link.all(this, 'type', 'key', 'password')

    return (
      <div styleName="form">
        <RadioGroup valueLink={linked.type}>
          <Flex
            justify="space-around"
          >
            <Box>
              <RadioButton styleName="radioButton" brand value="keystoreFile">
                Keystore File (UTC / JSON)
              </RadioButton>
            </Box>
            <Box>
              <RadioButton styleName="radioButton" brand value="privateKey">
                Private Key
              </RadioButton>
            </Box>
            <Box>
              <RadioButton styleName="radioButton" brand value="mnemonicPhrase">
                Mnemonic Phrase
              </RadioButton>
            </Box>
          </Flex>
        </RadioGroup>
        <div styleName="fields">
          {
            linked.type.value === 'keystoreFile' && (
              <Button brand>Select Wallet File</Button>
            )
          }
          {
            linked.type.value === 'privateKey' && (
              <div>
                <TextArea valueLink={linked.key} placeholder="Paste / Type your Private Key" />
                <Button styleName="submitButton" brand onClick={this.submit}>Submit</Button>
              </div>
            )
          }
          {
            linked.type.value === 'mnemonicPhrase' && (
              <div>
                <TextArea valueLink={linked.key} placeholder="Mnemonic Phrase" />
                <Input styleName="passwordInput" valueLink={linked.password} placeholder="Password" />
                <Button styleName="submitButton" brand onClick={this.submit}>Submit</Button>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
