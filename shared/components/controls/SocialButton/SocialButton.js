import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './SocialButton.scss'

import Button from 'components/controls/Button'

import spriteImage from './images/icons-sprite.svg'


const SocialButton = ({ children, facebook, twitter, ...rest }) => {

  let content

  const styleName = cx('button', {
    facebook,
    twitter,
  })

  if (children) {
    content = children
  } else if (facebook) {
    content = 'Facebook'
  } else if (twitter) {
    content = 'Twitter'
  }

  return (
    <Button styleName={styleName} smallPadding {...rest}>
      <div styleName="iconContainer">
        <img styleName="icon" src={spriteImage} />
      </div>
      {content}
    </Button>
  )
}

export default cssModules(SocialButton, styles, { allowMultiple: true })
