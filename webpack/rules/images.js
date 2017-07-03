const resolveRule = (options) => ([
  {
    test: /images.*\.(png|ico|jpg|jpeg|gif|svg)(\?.*)?$/,
    loader: 'file-loader',
    options,
  },
])


export const development = resolveRule({
  name: 'images/[name]_[hash:6].[ext]',
})

export const production = resolveRule({
  name: 'images/[name]_[hash:6].[ext]',
})
