import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

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
              <Button className="button-action" onClick={() => alert('Você acessou a visualizacao da nota.')}>
                  <i className="fas fa-eye"/> Ver Nota
              </Button>
          </td>
          <td style={tdFill}/>
          <td style={tdStyle}>
              <Button className="button-action" onClick={() => alert('Você pediu download da nota.')}>
                  <i className="fas fa-download"/> Baixar XML
              </Button>
          </td>
      </tr>
      );
    }
}

export default Actions;