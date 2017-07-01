import log from 'log-with-style'


const createMockHandler = (opts) => {
  let timer
  const name = `[c="color: #ff3b84"]${opts.method.toUpperCase()} ${opts.endpoint}[c]`
  const delay = opts.delay || 500

  const logRequestInfo = (status) => log(`[c="color: blue"]Mock request[c] ${name} [c="color: blue"]${status}[c]`)

  logRequestInfo('started')

  const promise = new Promise((fulfill) => {
    timer = setTimeout(() => {
      fulfill(opts.mockData || {})
      logRequestInfo(`finished in ${delay}`)
    }, delay)
  })

  promise.__proto__.abort = () => {
    clearTimeout(timer)
    logRequestInfo('aborted')
  }

  return promise
}

export default createMockHandler
