import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo_branco.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cnpj />
        <div className="line" />
        <Title />
        <Table />
        <Invite />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">          
          <a
            href="https://arquivei.com.br"
            target="_blank"
          >
          <img src={logo} className="header-logo" alt="logo Arquivei" />
          </a>
        </div>
    );
  }
}

class Cnpj extends Component {
  constructor(props) {
    super(props);
    this.cnpj = {
      value: "[SP] [19.427.033/0001-40] ARQUIVEI SERVICOS ON LINE LTDA"
    };
  }

  render() {
    return (
        <div className="container-cnpj">
          SEU CNPJ / RAZÃO SOCIAL:<br></br>
          <b>{this.cnpj.value}</b>
        </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
        <div className="container-title">
          Existem novas notas contra seu CNPJ
        </div>
    );
  }
}

class Table extends Component {
  render() {
    return (
        <table className="container-table">
          <tr>
            <th>Status</th>
            <th>Número</th>
            <th>Emissão</th>
            <th>Fornecedor</th>
            <th>Valor</th>
            <th>CNPJ</th>
            <th>Ação</th>
          </tr>
          <tr>
            <td>
              <div className="label-status">
                AUTORIZADA
              </div>
            </td>
            <td>999999</td>
            <td>04/10/2018</td>
            <td>COMERCIAL JAHU BORRACHAS E AUTO PEÇAS LTDA</td>
            <td>R$974,00</td>
            <td>10.101.010/1010-10</td>
            <td>
              <tr>
                <td>
                <div className="button-action" onClick={() => alert('click')}>
                <i class="fas fa-eye"/> Ver Nota
                </div>
              </td>
              <td>
                <div className="button-action" onClick={() => alert('click')}>
                <i class="fas fa-download"/> Baixar XML
                </div>
                </td>
                </tr>
              </td>
          </tr>
        </table>
    );
  }
}

class Invite extends Component {
  render() {
    return (
        <div className="container-invite">
          Você pode ter as notas de <b>todos os seus fornecedores</b>, que ter acesso a elas?
          <b>Experimente grátis o Arquivei</b> e tenha todas suas notas diretamente da <b>Sefaz</b>
          <div className="button-invite" onClick={() => alert('click')}>
            Experimentar o Arquivei
          </div>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
