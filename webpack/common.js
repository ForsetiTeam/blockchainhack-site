import webpack from 'webpack'
import requireDir from 'require-dir'
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import AppConfigPlugin from '@eagle/app-config/webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from '@eagle/app-config'


const rulesFolder = requireDir('./rules')
const rules = Object.keys(rulesFolder)
  .map((k) => rulesFolder[k])
  .map((rule) => (Array.isArray(rule) ? rule : rule[config.env]))
  .reduce((result, rule) => result.concat(rule), [])

const globals = {
  'process.env.NODE_ENV': JSON.stringify(config.env),
  // TODO fix __CONFIG__ - remove it and check @eagle/app-config/webpack to resolve in /client.js
  __CONFIG__: JSON.stringify(config),
}


const webpackConfig = {
  entry: {
    'app': config.paths.client('index.js'),
  },

  output: {
    path: config.paths.build(),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: config.publicPath,
  },

  module: {
    rules,
  },

  resolve: {
    modules: [
      config.paths.base('client'),
      config.paths.base('shared'),
      config.paths.base('local_modules'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.scss'],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ]
  },

  plugins: [
    new AppConfigPlugin(),
    new webpack.DefinePlugin(globals),
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressBarPlugin({ clear: false }),
    new HtmlWebpackPlugin({
      title: 'BlockJudge',
      template: config.paths.client('index.html'),
      //favicon: config.paths.client('assets/favicon-32x32.png'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}

export default webpackConfig
