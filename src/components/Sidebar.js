import React, { Component } from 'react'

import { NavLink, Link } from 'react-router-dom'


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Double Extortion
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/datatable'>
                <i className="nc-icon nc-paper-2"></i>
                <p>Data Table</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/about'>
                <i className="nc-icon nc-tap-01"></i>
                <p>About</p>
              </NavLink>
            </li>
              <div class="dropdown-divider"></div>

            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://www.buymeacoffee.com/doubleextortion" >
                <img src="bmc.svg"  width="32" alt="Buy me a coffee" />
                <p>Buy me a coffee</p>
                </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar

