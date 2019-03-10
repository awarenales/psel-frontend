import React, { Component } from 'react';
import './index.css';

export class Cnpj extends Component {
	constructor(props) {
		super(props);
		this.cnpj = {
			value: "[SP] [19.427.033/0001-40] ARQUIVEI SERVICOS ON LINE LTDA"
		};
	}
	render() {
		return (<div className="container-cnpj">
			SEU CNPJ / RAZÃO SOCIAL:<br></br>
			<b>{this.cnpj.value}</b>
		</div>);
	}
}