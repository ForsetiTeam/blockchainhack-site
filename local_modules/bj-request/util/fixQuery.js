/*
  This fix needs to convert output for req.query()
  This method converts

  const query = {
    filter: {
      tags: [ 'clean', 'work' ]
    }
  }

  to

  const query = {
    filter: {
      tags: {
        '': [ 'clean', 'work' ]
      }
    }
  }

  This allows to get right string in req.query() output:

  Without fix it would be:

  filter[tags]: clean
  filter[tags]: work

  With fix it would be (server requires such format):

  filter[tags][]: clean
  filter[tags][]: work

 */

import { map, mapValues } from 'lodash'


const fixQuery = (query) => {
  if (query === null || typeof query !== 'object') {
    return query
  }

  // Handle Array
  if (query instanceof Array) {
    return map(query, (value, index) => fixQuery(value))
  }

  // Handle Object
  if (query instanceof Object) {
    return mapValues(query, (value) => {
      if (value instanceof Array) {
        return {
          '': value,
        }
      }
      return fixQuery(value)
    })
  }
}

export default fixQuery
