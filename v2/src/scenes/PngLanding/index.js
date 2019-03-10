import React, { Component } from 'react';
import './index.css';
import { Invite } from './components/Invite';
import { Table } from './components/Table';
import { Cnpj } from './components/Cnpj';

export class Body extends Component {
    render() {
        return (
            <div>
                <Cnpj />
                <div className="line" />
                <h2>Existem novas notas contra seu CNPJ</h2>
                <Table />
                <Invite />
            </div>
        );
    }
}