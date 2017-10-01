import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'


export default (webpackConfig) => {
  delete webpackConfig.devtool

  webpackConfig.plugins.push(
    new UglifyJsPlugin({
      comments: false,
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: true,
      },
    }),
  )

  webpackConfig.module.rules = webpackConfig.module.rules.map((loader) => {
    if (loader.test.test('*.css') || loader.test.test('*.scss')) {
      loader.use = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: loader.use.slice(1),
      })
    }
    return loader
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].[hash:6].css',
      allChunks: true,
    }),
  )

  return webpackConfig
}
