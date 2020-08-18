import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

import Data from './Data'

class App extends Component {

  componentDidMount(){
    Data.retrieveRansomwareEvents()
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route path='/' component={Main} />
        </Router>
      </div>
    )
  }
}

export default App
