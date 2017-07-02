import React, { Component } from 'react'
import PropTypes from 'bj-proptypes'
import { Flex, Box } from 'bj-flexbox'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Header.scss'

import HrefWithLine from 'components/HrefWithLine'
import Button from 'components/controls/Button'
import CreateDealButton from 'components/controls/buttons/CreateDealButton'
import HeaderContainer from 'components/header/HeaderContainer'


@connect({
  isLoggedIn: 'auth.isLoggedIn',
}, {}, { pure: false })
@cssModules(styles)
export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  render() {
    const { router: { location: { pathname } } } = this.context
    const { isLoggedIn } = this.props

    const isDealsLinkActive = /deals\//.test(pathname)

    const nav = [
      { title: 'Deals', to: links.abs.customerDeals, isActive: isDealsLinkActive },
      { title: 'Arbitrations', to: links.abs.arbitrations },
    ]

    return (
      <HeaderContainer>
        <Flex
          justify="space-between"
          align="center"
        >
          <Box>
            <div styleName="logo" onClick={() => actions.router.push(links.abs.home)}>BlockJudge</div>
          </Box>
          <Box>
            <div styleName="nav">
              {
                nav.map((item, index) => (
                  <HrefWithLine
                    key={index}
                    styleName="navItem"
                    customColor
                    {...item}
                  />
                ))
              }
            </div>
          </Box>
          <Box>
            {
              isLoggedIn ? (
                <CreateDealButton whiteBrand />
              ) : (
                <Button whiteBrand to={links.abs.login}>Login</Button>
              )
            }
          </Box>
        </Flex>
      </HeaderContainer>
    )
  }
}
