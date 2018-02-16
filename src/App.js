import React, { Component } from 'react';
import Noblesmall from './assets/Noblesmall.png';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Noblesmall} className="App-logo" alt="logo" />
          <h1 className="App-title">NOBLE SOFTWARE GROUP</h1>
        </header>
        <p className="App-intro">
          Under Contruction! Noble Software Group
        </p>
      </div>
    );
  }
}

export default App;
