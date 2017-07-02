/**
 * Component to represent Router title
 */

import React from 'react'
import PropTypes from 'bj-proptypes'

import cssModules from 'react-css-modules'
import styles from './ActiveRouteTitle.scss'


const ActiveRouteTitle = (props, { router: { routes } }) => {
  const activeRoute = routes[routes.length - 1]

  return activeRoute.title && (
    <div styleName="title" {...props}>{activeRoute.title}</div>
  )
}

ActiveRouteTitle.contextTypes = {
  router: PropTypes.object,
}

export default cssModules(ActiveRouteTitle, styles)
