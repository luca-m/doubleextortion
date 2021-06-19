import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import DataTable from './DataTable'
import About from './About'


class Main extends Component {

  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route path="/dashboard" render={(props) => ( <Dashboard loading={this.props.loading} /> )} />
          <Route path="/datatable" render={(props) => ( <DataTable loading={this.props.loading} /> )} />
          <Route path="/about" render={(props) => ( <About loading={this.props.loading} /> )} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main

