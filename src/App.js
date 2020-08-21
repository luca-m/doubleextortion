import React, { Component } from 'react'
import { BrowserRouter , Route ,HashRouter as Router} from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Snackbar from '@material-ui/core/Snackbar'

import Data from './Data'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-175756921-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props){
    super(props)
    this.state={}
    this.state.loading=true;
    this.state.loading_message="Loading Data";
  }
  componentDidMount(){
    Data.retrieveRansomwareEvents(this.loadingComplete)
  }

  loadingComplete=(data,err)=>{
    this.setState({loading:false});
    console.info('data loading complete')

  }

  render() {
    return (
      <div className="wrapper">
        <Snackbar
          anchorOrigin={{ 
            vertical: 'top',
            horizontal: 'center'
          }}
          open={this.state.loading}
          onClose={ ()=>{} }
          message={this.state.loading_message}
        />
        <Router>
          <Sidebar />
          <Route path='/' render={(props) => ( <Main loading={this.state.loading} />  )} /> 
        </Router>
      </div>
    )
  }
}

export default App
