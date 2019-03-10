import React, { Component } from 'react';

var tdStyle = {
    margin: '0',
    padding: '0'
}

var tdFill = {
    width: '14px',
    padding: '0'
}

class Actions extends Component {
    render() {
      return (
      <tr>
          <td style={tdStyle}>
              <button onClick={() => alert('Você acessou a visualizacao da nota.')}>
                  <i className="fas fa-eye"/> Ver Nota
              </button>
          </td>
          <td style={tdFill}/>
          <td style={tdStyle}>
              <button onClick={() => alert('Você pediu download da nota.')}>
                  <i className="fas fa-download"/> Baixar XML
              </button>
          </td>
      </tr>
      );
    }
}

export default Actions;