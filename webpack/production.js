import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'


export default (webpackConfig) => {
  //if (config.propEnv !== 'localtest') {
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
  //}

  webpackConfig.module.loaders = webpackConfig.module.rules.map((loader) => {
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
      filename: '[name].css',
      allChunks: true,
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons',
    //   // this assumes your vendor imports exist in the node_modules directory
    //   minChunks: (module) => module.context && module.context.indexOf('node_modules') >= 0,
    // }),
  )

  return webpackConfig
}
