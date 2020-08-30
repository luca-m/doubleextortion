import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        
          <nav>
            <ul className="footer-menu">
              <li>
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
