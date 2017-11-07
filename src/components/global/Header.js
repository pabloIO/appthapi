import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">

          <nav className="container-fluid">
            <div className="nav-wrapper deep-orange">
              <a href="#" className="brand-logo center">Appthapi</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
              </ul>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
            </div>
          </nav>

      </div>
    );
  }
}

export default Header;
