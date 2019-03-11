import React, { Component } from 'react';
import './App.css';
import { MyPage } from './scenes/PngLanding';

export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <MyPage />
      </div>
    );
  }
}