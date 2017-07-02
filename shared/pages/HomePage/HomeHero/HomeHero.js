import React from 'react'

import cssModules from 'react-css-modules'
import styles from './HomeHero.scss'

import WidthContainer from 'components/WidthContainer'
import Button from 'components/controls/Button'


const HomeHero = () => (
  <div styleName="homeHero">
    <div styleName="content">
      <div styleName="mainText">
        The first working framework for arbitration on smart contracts
      </div>
      <div styleName="subText">
        Arbitration service based on smart contracts and Reputation System. In case of conflict situations
        customers can open a dispute in our arbitration system. The arbitrators (Judges) stake their reputation
        and Arbitrators reward distribution depends on it so they are motivated To resolve a dispute fairly
      </div>
      <Button h={50} brand>Get started</Button>
    </div>
  </div>
)

export default cssModules(HomeHero, styles)
