import request from 'superagent'
import resolveEndpoint from './resolveEndpoint'
import fixQuery from './fixQuery'
import token from './token'


const applyOptions = (opts) => {
  const req = request[opts.method](resolveEndpoint(opts.endpoint))

  req.set({
    'Content-Type': opts.formData ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
    ...(opts.headers || {}),
  })

  if (opts.tokenName) {
    if (!opts.body) {
      opts.body = {}
    }
    opts.body.token = token.load(opts.tokenName)
  }

  if (opts.query) {
    req.query(fixQuery(opts.query))
  }

  if (opts.body) {
    req.send(opts.body)
  }

  if (opts.sameOrigin) {
    req.withCredentials()
  }

  return req
}

export default applyOptions
