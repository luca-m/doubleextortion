import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';

import Icon from '@material-ui/core/Icon';
/*
            <p className="text-center" style={{'textAlign':'center'}}>
            <IconButton href="https://github.com/luca-m/" target="_blank" >
              <Icon className="fa fa-github" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/allemco/" target="_blank" >
              <Icon className="fa fa-linkedin" />
            </IconButton>
            </p>
 * */
class Footer extends Component {
  render() {
    return (
      <footer className="footer">

        <div className="container-fluid">
        

            <div className="row">
                <div className="card w-100"> 
                <div className="card-header"><h4>Disclaimer</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                Data about ransomware events and attacks are collected through open sources intelligence and data feeds. 
                <br/>
                The data are provided “as is”, without any kind of warranty. 
                <br/>
                Don’t blindly rely on them to determine if an organization has been impacted by a double-extortion attack, criminals could also lie even during the disclosure of their victims, and remember, OSINT needs to be treated with caution.
                </div>
                </div>
            </div>


          <nav >
            <ul className="footer-menu ">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to='/datatable'>
                <p>Data Table</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to='/about'>
                <p>About</p>
              </NavLink>
            </li>
            </ul>
            <div className="copyright text-center">

            <p {...{ 'xmlns:dct': "http://purl.org/dc/terms/" }} xmlnscc="http://creativecommons.org/ns#" className="license-text"><a rel="cc:attributionURL" property="dct:title" href="https://doubleextortion.com/">Double Extortion - Ransomware and Breach Tracker</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/allemco/" >Luca Mella</a> is licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0<img style={{"height":"22px","marginLeft":"3px","verticalAlign":"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img style={{"height":"22px","marginLeft":"3px","verticalAlign":"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img style={{"height":"22px","marginLeft":"3px","verticalAlign":"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img style={{"height":"22px","marginLeft":"3px","verticalAlign":"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" /></a></p>
          </div>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
