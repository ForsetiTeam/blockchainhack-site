import React, { Component } from 'react'
import { Flex, Box } from 'bj-flexbox'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import WidthContainer from 'components/WidthContainer'
import Href from 'components/Href'


@cssModules(styles)
export default class Footer extends Component {

  render() {
    const nav = [
      { title: 'About Us', link: '/about' },
      { title: 'Privacy', link: '/privacy' },
      { title: 'Terms', link: '/terms' },
    ]

    return (
      <footer styleName="footer">
        <WidthContainer>
          <Flex
            justify="space-between"
            align="center"
          >
            <Box>
              <div styleName="logo">BlockJudge</div>
            </Box>
            <Box>
              {
                nav.map(({ title, link }, index) => (
                  <Href
                    key={index}
                    styleName="navItem"
                    title={title}
                    to={link}
                    customColor
                  />
                ))
              }
            </Box>
          </Flex>
        </WidthContainer>
      </footer>
    )
  }
}
