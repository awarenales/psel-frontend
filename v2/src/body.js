import React, {Component} from 'react';
import './body.css';
import Actions from "./actions";
import ReactModal from 'react-modal';

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

  ReactModal.setAppElement('#root');

  class Invite extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

    render() {
      return (
          <div className="container-invite">
            Você pode ter as notas de <b>todos os seus fornecedores</b>, quer ter acesso a elas?
            <b>Experimente grátis o Arquivei</b> e tenha todas suas notas diretamente da <b>Sefaz</b>
            <div>
        <button onClick={this.handleOpenModal} className= "button-invite">
          Experimentar Arquivei
          </button>
        <ReactModal
            className="modal-content"
            overlayClassName="modal"      
            isOpen={this.state.showModal}
            contentLabel="Experimentar Arquivei"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            >
                <div className="modal-title">Experimente grátis o Arquivei <span role="img" aria-label="Party Popper">🎉</span></div>
                
                <button
                    onClick={this.handleCloseModal}
                    className="modal-close-btn">
                        <i className="fas fa-hand-middle-finger"></i>
                </button>
                
                <div style={{"margin-top": "24px", "margin-bottom":"32px", "text-align":"left"}}>
                    <p>Com o <b>Arquivei</b>, você terá acesso a <b>todas as notas</b> dos seus fornecedores, além de:</p>

                    <p>• <b>Consulta</b> de seus <b>XMLs</b> direto da <b>Sefaz</b>;<br></br>
                    • <b>Alerta</b> de notas <b>canceladas</b>;<br></br>
                    • <b>Conhecimento</b> de notas <b>indevidas/frias</b>;</p>

                    <p><b>Tudo</b> isso <b>grátis</b> e sem compromisso.</p>
                </div>

                <button
                    onClick={this.handleCloseModal}
                    className="modal-try-btn">
                    Experimentar agora
                </button>
            
                <div style={{"margin-top": "40px"}}>
                    <p>Ao continuar, você aceita o <a href="https://app.arquivei.com.br/termos" target="_blank"
              rel="noopener noreferrer">Termo de uso do Arquivei</a>.</p>
                </div>
        </ReactModal>
        </div>
          </div>
      );
    }
  }

  export default Body;