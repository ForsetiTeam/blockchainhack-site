import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from '@eagle/app-config'


export default (webpackConfig) => {
  webpackConfig.devtool = 'cheap-module-source-map'

  webpackConfig.devServer = {
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only',
    noInfo: true,
    lazy: false,
  }
  
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: 'BlockJudge',
      template: config.paths.client('index.html'),
      //favicon: config.paths.client('assets/favicon-32x32.png'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    }),
  )

  return webpackConfig
}
