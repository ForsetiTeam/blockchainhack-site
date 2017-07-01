import { mapValues } from 'lodash'


/*
  Generates absolute and relative paths.
  Relative paths good to use in routing and absolute in Link component.

  From:

  {
    register: 'register',
    profile: {
      root: 'profile',
      orders: 'orders',
      rates: {
        root: 'rates',
        perfumes: 'perfumes',
        colognes: 'colognes',
      },
    },
  }

  Creates:

  {
    register: '/register',
    profile: {
      root: '/profile',
      orders: '/profile/orders',
      rates: {
        root: '/profile/rates',
        perfumes: '/profile/rates/perfumes',
        colognes: '/profile/rates/colognes',
      },
    },
  }

 */
const generateAbsoluteLinks = (links, rootPath = '') =>
  mapValues(links, (value, key) => {
    if (typeof value === 'string') {
      if (key === 'root') {
        return rootPath
      }
      return `${rootPath}/${value}`
    }
    if (!value.root) {
      throw new Error('Missed `root` property in links object')
    }
    return generateAbsoluteLinks(value, `${rootPath}/${value.root}`)
  })

export default generateAbsoluteLinks
