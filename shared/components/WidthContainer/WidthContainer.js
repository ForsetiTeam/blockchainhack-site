import React from 'react'
import PropTypes from 'sb-proptypes'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './WidthContainer.scss'


const WidthContainer = ({ children, className, main, fullHeight, relative }) => {
  const containerStyleName = cx('widthContainer', {
    'main': main,
    'fullHeight': fullHeight,
  })

  const containerInStyleName = cx('widthContainerIn', {
    'fullHeight': fullHeight,
    'relative': relative,
  })

  return (
    <div styleName={containerStyleName} className={className}>
      <div styleName={containerInStyleName}>
        {children}
      </div>
    </div>
  )
}

WidthContainer.propTypes = {
  children: PropTypes.node,
  main: PropTypes.bool, // uses for main container between header and footer with vertical paddings
  fullHeight: PropTypes.bool,
  relative: PropTypes.bool,
  className: PropTypes.string,
}

export default cssModules(WidthContainer, styles, { allowMultiple: true })
