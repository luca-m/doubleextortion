import React, { Component } from 'react'
import { BrowserRouter , Route ,HashRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

import Data from './Data'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-175756921-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
