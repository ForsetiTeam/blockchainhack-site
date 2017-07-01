import generateAbsoluteLinks from './generateAbsoluteLinks'
import generateRoutes from './generateRoutes'


const generateLinks = (links) => {
  const routes = generateRoutes(links)
  const absLinks = generateAbsoluteLinks(links)

  return {
    routes,
    rel: links, // relative
    abs: absLinks, // absolute
  }
}

export default generateLinks
