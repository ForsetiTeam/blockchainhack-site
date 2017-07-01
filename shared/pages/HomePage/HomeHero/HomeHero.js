import React from 'react'

import cssModules from 'react-css-modules'
import styles from './HomeHero.scss'

import WidthContainer from 'components/WidthContainer'
import Button from 'components/controls/Button'


const HomeHero = () => (
  <div styleName="homeHero">
    <div styleName="content">
      <div styleName="mainText">
        What if technology could help improve conversations online?
      </div>
      <div styleName="subText">
        Discussing things you care about can be difficult.
        The threat of abuse and harassment online means that many people stop expressing
        themselves and give up on seeking different opinions.
      </div>
      <Button h={50} brand>Get started</Button>
    </div>
  </div>
)

export default cssModules(HomeHero, styles)
