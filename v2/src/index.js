import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Body from './body';
import MyModal from './modal';
import './modal.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  renderModal() {
    return (
      <MyModal 
        showModal={this.state.showModal}
        onClick={() => this.handleOpenModal}
      />
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);