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
import EditDealPage from 'pages/EditDealPage'
import ArbitrationsPage from 'pages/ArbitrationsPage'
import ArbitrationPage from 'pages/ArbitrationPage'


const routes = (
  <Route path="/" component={App}>
    <Route component={WithFooterLayout}>
      <Route component={WithHeaderLayout}>
        <IndexRoute component={HomePage} />
        <Route {...links.routes.customerDeals} component={DealsPage} />
        <Route {...links.routes.contractorDeals} component={DealsPage} />
        <Route {...links.routes.deal} component={DealPage} />
        <Route {...links.routes.createDeal} component={EditDealPage} />
        <Route {...links.routes.editDeal} component={EditDealPage} />
        <Route {...links.routes.arbitrations} component={ArbitrationsPage} />
        <Route {...links.routes.arbitration} component={ArbitrationPage} />
      </Route>
      <Route component={WithLogoLayout}>
        <Route {...links.routes.login} component={LoginPage} />
      </Route>
    </Route>
  </Route>
)

export default routes
