import React from 'react'
import MediaQuery from 'react-responsive'
import { media } from 'helpers'
import { forOwn } from 'lodash'


const mediaProps = {
  mobile: {
    maxWidth: media.mobileEnd,
  },
  exceptMobile: {
    minWidth: media.tabletPortraitStart,
  },
}

/**
 *
 * @param props {object}
 * @param props.children {node}
 * @param props.mobile {boolean}
 * @param props.exceptMobile {boolean}
 * @constructor
 */
const Media = (props) => {
  const { children, ...rest } = props
  let componentProps = {}

  forOwn(rest, (value, key) => {
    componentProps = {
      ...rest,
      ...componentProps,
      ...mediaProps[key],
    }
  })

  return (
    <MediaQuery {...componentProps}>
      {children}
    </MediaQuery>
  )
}

export default Media
