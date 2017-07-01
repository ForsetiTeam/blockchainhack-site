const path      = require('path')
const modPath   = require('app-module-path')

modPath.addPath(path.join(__dirname, '../local_modules'))
modPath.addPath(path.join(__dirname, '../client'))
modPath.addPath(path.join(__dirname, '../shared'))
modPath.addPath(path.join(__dirname, '../server'))

require('babel-polyfill')
require('babel-register')
