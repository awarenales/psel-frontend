import React, { Component } from 'react';
import './index.css'
import logo from './logo_branco.png';

export class Header extends Component {
    render() {
      return (
        <h1>          
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
          </h1>
      );
    }
  }