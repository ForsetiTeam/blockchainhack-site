import actions from 'redux/actions'
import { modals } from 'helpers'
import { applyOptions, createMockHandler, DummyPromise, token } from './util'
import messages from './messages'


/*
  {
    [METHOD]: {
      [endpoint]: true,
    }
  }
 */
const activeOnceRequests = {
  get: {},
  post: {},
  patch: {},
  put: {},
  delete: {},
}

let activeRequestCount = 0
let showLoaderTimer


const createResponseHandler = (req, opts) => {
  const debug = `${opts.method.toUpperCase()} ${opts.endpoint}`

  return new Promise((fulfill, reject) => req.end((err, res) => {
    let serverError

    --activeRequestCount

    if (!activeRequestCount) {
      actions.ui.hideLoader()
    }

    if (showLoaderTimer) {
      clearTimeout(showLoaderTimer)
    }

    if (err && res.body.message) {
      actions.modals.open(modals.DialogModal, {
        title: messages.dialogModalTitle,
        content: res.body.message,
      })
      throw res.body.message
    }

    if (!res && !err) {
      serverError = new Error(`Connection failed: ${debug}`)
    }

    if (!serverError && (!res || [ 400, 500 ].includes(res.statusCode))) {
      serverError = new Error('We`re having technical issues at that moment. Please try again later')
    }

    // if (!err && !res.noContent && res.type !== 'application/json') {
    //   err = new Error(`Unknown response type: '${res.type}' from ${debug}`)
    // }

    if (serverError) {
      actions.modals.open(modals.SomethingWentWrong)
      throw serverError
    }

    if (err) {
      // TODO write Error notifier
      return reject(res, err)
    }

    let resData = res.body

    if (typeof opts.modifyResult === 'function') {
      resData = opts.modifyResult(resData)
    }

    activeOnceRequests[opts.method][opts.endpoint] = false

    if (opts.tokenName) {
      token.update(opts.tokenName, resData.token)
    }

    if (typeof opts.onFinish === 'function') {
      opts.onFinish()
    }

    fulfill(resData, res)
  }))
}


const defaultOptions = {
  sameOrigin: true,
  multiple: false,
}

/**
 *
 * @param options {object}
 * @param options.endpoint {string}
 * @param options.method {string}
 * @param options.headers {object}
 * @param options.query {object}
 * @param options.body {object}
 * @param options.tokenName {string}
 * @param options.withCredentials {boolean}
 * @param options.multiple {boolean} - if request can be called multiple times
 * @param options.mock {boolean}
 * @param options.mockData {object}
 * @param options.delay {number}
 */
const sendRequest = (options) => {
  activeRequestCount++

  const opts = { ...defaultOptions, ...options }

  if (opts.mock) {
    return createMockHandler(opts)
  }

  if (!opts.multiple) {
    if (activeOnceRequests[opts.method][opts.endpoint]) {
      // return empty methods to prevent errors
      return new DummyPromise()
    }
    activeOnceRequests[opts.method][opts.endpoint] = true
  }

  if (opts.withLoader) {
    showLoaderTimer = setTimeout(actions.ui.showLoader, 100)
  }

  if (typeof opts.onStart === 'function') {
    opts.onStart()
  }

  const req = applyOptions(opts)
  const responseHandler = createResponseHandler(req, opts)

  responseHandler.abort = req.abort

  return responseHandler
}

const requestByMethod = (method) => (endpoint, opts) => sendRequest({ ...opts, endpoint, method })


export default {
  get: requestByMethod('get'),
  post: requestByMethod('post'),
  patch: requestByMethod('patch'),
  put: requestByMethod('put'),
  delete: requestByMethod('delete'),
}
