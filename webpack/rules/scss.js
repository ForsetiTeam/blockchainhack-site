import config from '@eagle/app-config'


const compile         = config.env === 'development' ? 'sourceMap' : 'minimize'
const localIdentName  = config.env === 'development' ? '[local]__[hash:base64:3]' : '[hash:base64:4]'

export default [
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          //[compile]: true,
          modules: true,
          localIdentName,
          //importLoaders: 1,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          data: '@import "./scss/index";',
          includePaths: [
            config.paths.client(),
            config.paths.base('node_modules'),
            config.paths.base('shared'),
          ],
        },
      }
    ]
  },
]
