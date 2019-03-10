import { Header } from './scenes/PngLanding/components/Header';
import { Body } from './scenes/PngLanding';
import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Body />
      </div>
    );
  }
}