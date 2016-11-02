import React, { Component } from 'react';
import logo from './css/images/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</h2>
        </div>
        <p className="App-intro">
          Silakan pilih toko.
        </p>
      </div>
    );
  }
}

export default App;
