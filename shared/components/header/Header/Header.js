import React, { Component } from 'react'
import { Flex, Box } from 'sb-flexbox'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './Header.scss'

import Href from 'components/Href'
import Button from 'components/controls/Button'
import HeaderContainer from 'components/header/HeaderContainer'


@connect({
  isLoggedIn: 'auth.isLoggedIn',
})
@cssModules(styles)
export default class Header extends Component {

  render() {
    const { isLoggedIn } = this.props

    const nav = [
      { title: 'Deals', link: '/deals' },
      { title: 'Arbitration', link: '/arbitration' },
    ]

    return (
      <HeaderContainer>
        <Flex
          justify="space-between"
          align="center"
        >
          <Box>
            <div styleName="logo">BlockJudge</div>
          </Box>
          <Box>
            <div styleName="nav">
              {
                nav.map(({ title, link }, index) => (
                  <Href
                    key={index}
                    styleName="navItem"
                    activeClassName={styles.navItemActive}
                    title={title}
                    to={link}
                    customColor
                  />
                ))
              }
            </div>
          </Box>
          <Box>
            {
              isLoggedIn ? (
                <Button whiteBrand to="/create-deal">Create Deal</Button>
              ) : (
                <Button whiteBrand to="/login">Login</Button>
              )
            }
          </Box>
        </Flex>
      </HeaderContainer>
    )
  }
}
