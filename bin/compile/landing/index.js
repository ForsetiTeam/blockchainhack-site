// require('../../bootstrap')
// require('./compile')


import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Landing from 'pages/HomePage/HomePage'


const foo = ReactDOMServer.renderToStaticMarkup(<Landing />)

console.log(foo)

