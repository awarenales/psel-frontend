import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './modal';

// Minimal modal example from reactcommunity.org

ReactModal.setAppElement('#main');

class MyModal extends Component {

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal()}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.props.showModal}
           contentLabel="Minimal Modal Example"
           centered
        >
          Hello world!
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default MyModal;