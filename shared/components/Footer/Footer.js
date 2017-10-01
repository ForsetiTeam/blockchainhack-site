import React, { Component } from 'react'
import { Flex, Box } from 'bj-flexbox'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import Href from 'components/Href/Href'
import Socials from 'components/Socials/Socials'


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
              <div styleName="logo">Forseti</div>
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
          <div styleName="socialsContainer">
            <Socials size={40} whiteEmpty links={{
              facebook: 'https://facebook.com/forseti_im',
              telegram: 'https://telegram.me/forseti_channel',
              twitter: 'https://twitter.com/forseti_im',
            }} />
          </div>
        </WidthContainer>
      </footer>
    )
  }
}
