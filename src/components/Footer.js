import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';

import Icon from '@material-ui/core/Icon';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">

        <div className="container-fluid">
        
          <nav>
            <ul className="footer-menu">
              <li>
              </li>
            </ul>
            <p className="text-center" style={{'textAlign':'center'}}>
            <IconButton href="https://github.com/luca-m/" target="_blank" >
              <Icon className="fa fa-github" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/allemco/" target="_blank" >
              <Icon className="fa fa-linkedin" />
            </IconButton>
            </p>
            <p className="copyright text-center">
               DoubleExtortion - Ransomware and Breach Tracker - 2020
          </p>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
