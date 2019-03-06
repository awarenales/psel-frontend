import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Popup extends Component {
constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false,
    };
}

handleClose() {
    this.setState({show: false});
}

handleShow() {
    this.setState({show: true});
}

    render() {
        return (
<Modal
    centered
    show = {this.state.show}
    onHide={this.handleClose}
>
  <Modal.Header>
    <Modal.Title>Experimente grátis o Arquivei</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Com o Arquivei, você terá acesso a todas as notas dos seus fornecedores, além de:

• Consulta de seus XMLs direto da Sefaz;
• Alerta de notas canceladas;
• Conhecimento de notas indevidas/frias;

Tudo isso grátis e sem compromisso.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary">Experimentar agora</Button>
  </Modal.Footer>
</Modal>
        );
    }
}

export default Popup;