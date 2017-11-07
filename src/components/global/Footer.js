import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <footer className="page-footer container-fluid deep-orange">
          <div className="footer-copyright">
            <div className="container">
              &copy; 2017 Copyright Appthapi
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
