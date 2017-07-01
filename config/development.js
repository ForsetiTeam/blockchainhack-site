import baseConfig from './default'

export default {
  publicPath: `http://local.blockjudge.com:${baseConfig.http.port}/`,

  services: {
    base: 'http://local.blockjudge.com:5100/',
    api: 'http://local.blockjudge.com:5100/',
  },
}
