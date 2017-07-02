export default (webpackConfig) => {
  webpackConfig.devtool = 'cheap-module-source-map'

  webpackConfig.devServer = {
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only',
    noInfo: true,
    lazy: false,
  }

  return webpackConfig
}
