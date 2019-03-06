import React, { Component } from 'react';
import logo from './logo_branco.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <a
            href="https://arquivei.com.br"
            target="_blank"
          >
          <img src={logo} className="App-logo" alt="logo Arquivei" />
          </a>
        </header>
        <div className="App-container">
          hi
        </div>
      </div>
    );
  }
}

export default App;
