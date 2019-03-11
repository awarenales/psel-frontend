import React, {Component} from 'react';
import './index.css';

var rowHeader = ['Status','Número', 'Emissão','Fornecedor','Valor','CNPJ','Ação'];
var rowValues = ['status', 'number', 'emissionDate', 'emitterXNome', 'value', 'emitterCNPJ', 'prettylittlebuttons']

function Cell(props) {
  return (
    <div className="cell">
      {props.value}
    </div>
  );
}

export class Table extends Component {
  renderCell(i) {
    return <Cell value={i} />;
  }

	render() {

		return (
			<div className='container'>
        <div className="cell-header">
					{rowHeader.map((value) =>
						<Cell value={value} />
						)}
        </div>
				<div className="cell-row">
					{rowValues.map((value) =>
						<Cell value={value} />
						)}
        </div>
			</div>
		);
	}
}