import React, { Component } from 'react';
import './index.css';
import { Invite } from './components/Invite';
import { Table } from './components/Table';
import { Cnpj } from './components/Cnpj';
import { Header } from './components/Header';

export class MyPage extends Component {
    render() {
        return (
            <div className='wrapper'>
							<Header />
              <Cnpj />
              <div className="line" />
              <h2>Existem novas notas contra seu CNPJ</h2>
              <Table />
              <Invite />
            </div>
        );
    }
}