import React, { Component } from 'react';
import './index.css';

export class Actions extends Component {
    render() {
      return (
				<div className='btn-wrapper'>
              <button onClick={() => alert('Você acessou a visualizacao da nota.')}>
                  <i className="fas fa-eye"/> Ver Nota
              </button>
              <button onClick={() => alert('Você pediu download da nota.')}>
                  <i className="fas fa-download"/> Baixar XML
              </button>
          </div>
      );
    }
}