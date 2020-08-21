import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import DataTable from './DataTable'


class Main extends Component {

  render() {
    console.info('main',this.props.loading)
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route path="/dashboard" render={(props) => ( <Dashboard loading={this.props.loading} /> )} />
          <Route path="/datatable" render={(props) => ( <DataTable loading={this.props.loading} /> )} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main

