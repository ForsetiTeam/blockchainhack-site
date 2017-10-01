import baseConfig from './default'

export default {
  publicPath: `http://local.forseti.com:${baseConfig.http.port}/`,

  services: {
    base: 'http://local.forseti.com:5100/',
    api: 'http://local.forseti.com:5100/',
  },
}
