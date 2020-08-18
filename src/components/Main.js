import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import DataTable from './DataTable'

import MetaTags from 'react-meta-tags';

class Main extends Component {

  render() {
    return (
      <div className="main-panel">
        <MetaTags>
            <title>DoubleExtortion Tracker</title>
            <meta id="meta-description" name="description" content="Tracking ransomware events in the wild" />
            <meta id="og-title" property="og:title" content="DoubleExtortion Tracker" />
            <meta id="og-image" property="og:image" content="public/screen.jpg" />
          </MetaTags>
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/datatable" component={DataTable} />
          <Redirect from='*' to='#/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main

