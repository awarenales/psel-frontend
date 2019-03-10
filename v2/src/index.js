import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Body from './body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);