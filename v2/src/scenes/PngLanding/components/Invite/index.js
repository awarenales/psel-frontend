import React, {Component} from 'react';
import ReactModal from 'react-modal';
import './index.css';

ReactModal.setAppElement('#root');

export class Invite extends Component {
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
	  <button onClick={this.handleOpenModal} className= "button-invite" label="Experimentar Arquivei">Experimentar Arquivei</button>
	  <ReactModal
	  	centered
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