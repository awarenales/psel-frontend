// buttons to view and download file
// separate from table to make code easier to understand

import React, { Component } from 'react';
import './index.css';

export class Actions extends Component {
    render() {
      return (
				<div className='btn-wrapper'>
              <button className='btn-wrapper' onClick={() => alert('Você acessou a visualizacao da nota.')}>
                  <i className="fas fa-eye"/> Ver Nota
              </button>
              <button className='btn-wrapper' onClick={() => alert('Você pediu download da nota.')}>
                  <i className="fas fa-download"/> Baixar XML
              </button>
          </div>
      );
    }
}