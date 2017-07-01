import { mapValues } from 'lodash'

import titles from './titles'


/*
  Extend links with titles from titles list

  From:

  {
    register: 'register',
    profile: {
      root: 'profile',
      orders: 'orders',
    },
  }

  Creates:

  {
    register: {
      path: 'register',
      title: titles.register,
    },
    profile: {
      root: {
        path: 'profile',
        title: titles['profile'],
      },
      orders: {
        path: 'orders',
        title: titles['profile.orders'],
      },
    },
  }

 */
const generateRoutes = (links, rootPath = '') =>
  mapValues(links, (value, key) => {
    if (typeof value === 'string') {
      const path = `${rootPath ? `${rootPath}.` : ''}${key}`
      const title = titles[path]

      if (!title) {
        console.warn(`Missed translation for title '${path}' in links.generateRoutes`)
      }

      return {
        path: value,
        title,
      }
    }
    return generateRoutes(value, `${rootPath}${key}`)
  })

export default generateRoutes
