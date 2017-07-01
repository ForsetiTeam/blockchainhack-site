import webpack from 'webpack'
import express from 'express'
import bodyParser from 'body-parser'
import historyApiFallback from 'connect-history-api-fallback'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '@eagle/app-config'
import webpackConfig from '../../webpack'


const port      = config.http.port
const app       = express()
const compiler  = webpack(webpackConfig)

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ strict: true, limit: '10mb' }))
app.use(historyApiFallback())
app.use(webpackMiddleware(compiler, webpackConfig.devServer))
app.use(webpackHotMiddleware(compiler))

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
