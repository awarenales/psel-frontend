import React, { Component } from 'react';
import './header.css'
import logo from './logo_branco.png';

class Header extends Component {
    render() {
      return (
        <div className="App-header">          
            <a
              href="https://arquivei.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo}
                className="header-logo"
                alt="logo Arquivei"
              />
            </a>
          </div>
      );
    }
  }

  export default Header;