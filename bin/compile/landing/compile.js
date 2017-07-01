import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Landing from 'pages/HomePage/HomePage'


console.log(ReactDOMServer.renderToStaticMarkup(<Landing />))
