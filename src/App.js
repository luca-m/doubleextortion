import React, { Component } from 'react'
import { BrowserRouter , Route ,HashRouter as Router} from 'react-router-dom'
import MetaTags from 'react-meta-tags';
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
        <MetaTags>
            <title>DoubleExtortion Tracker</title>
            <meta id="meta-description" name="description" content="Tracking ransomware events in the wild" />
            <meta id="og-title" property="og:title" content="DoubleExtortion Tracker" />
            <meta id="og-image" property="og:image" content="public/screen.jpg" />
        </MetaTags>
        <Router>
          <Sidebar />
          <Route path='/' component={Main} />
        </Router>
      </div>
    )
  }
}

export default App
