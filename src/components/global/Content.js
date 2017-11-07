import React, { Component } from 'react';
import plato from '../images/plato1.svg';
import lechuga from '../images/lechuga.svg';
import filete from '../images/filete.svg';
import papas from '../images/papa_frita.svg';
import tomate from '../images/tomates.svg';
import '../css/App.css';

import $ from 'jquery';
import Materialize from 'materialize-css';

class Content extends Component {
    render() {
    return (
      <div className="App">

            <div className="container main">
              <center>
                <div className=""></div>
                <div className="contenedor">
                  <img src={plato} className="plato"/>
                  <div>
                    <img src={lechuga} className="lechuga"/>
                    <img src={filete} className="filete"/>
                    <img src={papas} className="papas"/>
                    <img src={tomate} className="tomate"/>
                  </div>
                </div>
              </center>
              <h2 className="red-text">En construcción...</h2>
              {/* <div className="input-field">
                <input type="text" id="name" className=""/>
                <label htmlFor="name" className="">Name</label>
              </div> */}
            </div>

      </div>
    );
  }
}

$(document).ready(function(){
  Materialize.updateTextFields();
});

export default Content;
