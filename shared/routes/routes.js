import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import { links } from 'helpers'


// import { loggedInUser, onlyTests } from './authWrappers'

// Containers ------------------------------------------------------------------ /

import App from 'containers/App'

// Layouts --------------------------------------------------------------------- /

import WithFooterLayout from 'layouts/WithFooterLayout'
import WithHeaderLayout from 'layouts/WithHeaderLayout'
import WithLogoLayout from 'layouts/WithLogoLayout'

// Pages ----------------------------------------------------------------------- /

import HomePage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage'
import DealsPage from 'pages/DealsPage'
import DealPage from 'pages/DealPage'
import ArbitrationPage from 'pages/ArbitrationPage'


const routes = (
  <Route path="/" component={App}>
    <Route component={WithFooterLayout}>
      <Route component={WithHeaderLayout}>
        <IndexRoute component={HomePage} />
        <Route {...links.routes.deals} component={DealsPage} />
        <Route {...links.routes.createDeal} component={DealPage} />
        <Route {...links.routes.editDeal} component={DealPage} />
        <Route {...links.routes.arbitration} component={ArbitrationPage} />
      </Route>
      <Route component={WithLogoLayout}>
        <Route {...links.routes.login} component={LoginPage} />
      </Route>
    </Route>
  </Route>
)

export default routes