import React, {Component} from 'react';
import './body.css';
import Actions from "./actions";

class Body extends Component {
    render() {
        return (
            <div className="body">
        <Cnpj />
        <div className="line" />
        <Title />
        <Table />
        <Invite />
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
            <thead>
            <tr>
              <th>Status</th>
              <th>Número</th>
              <th>Emissão</th>
              <th>Fornecedor</th>
              <th>Valor</th>
              <th>CNPJ</th>
              <th>Ação</th>
            </tr>
            </thead>
            <tbody>
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
                <Actions />
              </td>
            </tr>
            </tbody>
          </table>
      );
    }
  }
  class Invite extends Component {
    render() {
      return (
          <div className="container-invite">
            Você pode ter as notas de <b>todos os seus fornecedores</b>, quer ter acesso a elas?
            <b>Experimente grátis o Arquivei</b> e tenha todas suas notas diretamente da <b>Sefaz</b>
            <button className="button-invite"
            onClick= {() => this.handleOpenModal}>
              Experimentar o Arquivei
            </button>
          </div>
      );
    }
  }

  export default Body;