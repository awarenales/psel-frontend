import React, {Component} from 'react';
import ReactModal from 'react-modal';
import './index.css';

ReactModal.setAppElement('#root');

// gray box with invite on PG1 has a button with a trigger to a modal, which is PG2
// P2 has another button which leads to PG3, another modal

// (PG* are references to Zeplin designs, check readme in v2/ directory)

export class Invite extends Component {
  constructor(props) {
	  super(props);
	  this.state = {showModal1: false, showModal2: false};

	this.handleOpenModal1 = this.handleOpenModal1.bind(this);
	this.handleCloseModal1 = this.handleCloseModal1.bind(this);
	this.handleOpenModal2 = this.handleOpenModal2.bind(this);
	this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }

handleOpenModal1 () {
  this.setState({ showModal1: true });
}

handleCloseModal1 () {
  this.setState({ showModal1: false });
}

handleOpenModal2 () {
	this.setState({ showModal1: false, showModal2: true});
}

handleCloseModal2 () {
  this.setState({ showModal2: false });
}

  render() {
	return (
		// text inside gray box on PG1
		<div className="container-invite">
		  Você pode ter as notas de <b>todos os seus fornecedores</b>, quer ter acesso a elas?<br></br>
		  <b>Experimente grátis o Arquivei</b> e tenha todas suas notas diretamente da <b>Sefaz</b>
		  <div>

		{/**magic button leading to modalland */}
	  <button onClick={this.handleOpenModal1} style={{'margin-top': '16px'}} className= "button-invite" label="Experimentar Arquivei">Experimentar Arquivei</button>
	  
		{/**modal component */}
		<ReactModal
	  	centered
		  className="modal-content"
		  overlayClassName="modal"      
		  isOpen={this.state.showModal1}
		  contentLabel="Experimentar Arquivei"
		  onRequestClose={this.handleCloseModal1}
		  shouldCloseOnOverlayClick={true}
		  >
				{/**modal title */}
			  <div className="modal-title">Experimente grátis o Arquivei <span role="img" aria-label="Party Popper">🎉</span></div>
			  
				{/* 'close' button on top right */}
			  <button
				  onClick={this.handleCloseModal1}
				  className="modal-close-btn">
					  <i className="fas fa-hand-middle-finger"></i> {/*because why not*/}
			  </button>
			  
				{/* text on PG2 body */}
			  <div style={{"margin-top": "24px", "margin-bottom":"32px", "text-align":"left"}}>
				  <p>Com o <b>Arquivei</b>, você terá acesso a <b>todas as notas</b> dos seus fornecedores, além de:</p>

				  <p>• <b>Consulta</b> de seus <b>XMLs</b> direto da <b>Sefaz</b>;<br></br>
				  • <b>Alerta</b> de notas <b>canceladas</b>;<br></br>
				  • <b>Conhecimento</b> de notas <b>indevidas/frias</b>;</p>

				  <p><b>Tudo</b> isso <b>grátis</b> e sem compromisso.</p>
			  </div>

				{/* button on PG2 that leads to PG3 */}
			  <button
				  onClick ={this.handleOpenModal2}
				  className="modal-try-btn">
				  Experimentar agora
			  </button>
		  
			{/* text on PG2 modal footer */}
			  <div style={{"margin-top": "40px"}}>
				  <p>Ao continuar, você aceita o <a href="https://app.arquivei.com.br/termos" target="_blank"
			rel="noopener noreferrer">Termo de uso do Arquivei</a>.</p>
			  </div>
	  </ReactModal>

		{/**PG3 */}
		<ReactModal
	  	centered
		  className="modal-content"
		  overlayClassName="modal"      
		  isOpen={this.state.showModal2}
		  contentLabel="Experimentar Arquivei"
		  onRequestClose={this.handleCloseModal2}
		  shouldCloseOnOverlayClick={true}
		>
		{/**modal gif */}
		<img className='loadingGif' src={require('./factory.gif')} alt="loading..." />

		{/**modal subtitle */}
		<div>Descarregando para a nuvem</div>

		{/**modal loading bar */}
		<div className='status-bar'>
			<div className='filler' />
		</div>
		</ReactModal>
	  </div>
		</div>
	);
  }
}