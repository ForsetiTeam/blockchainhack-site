import config from '@eagle/app-config'
import base from './common'

export default require(`./${config.env || 'development'}`)(base)
