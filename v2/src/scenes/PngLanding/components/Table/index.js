import React, {Component} from 'react';
import './index.css'; // style
import { Actions } from './ActionButtons';

var rowHeader = ['Status','Número', 'Emissão','Fornecedor','Valor','CNPJ','Ação'];

// values from api should go here
var rowValues = [<div className='label-status'>AUTORIZADO</div>, 'number', 'emissionDate', 'emitterXNome', 'value', 'emitterCNPJ', <Actions />]

function Cell(props) {
  return (
    <div className="cell">
      {props.value}
    </div>
  );
}

export class Table extends Component {

	// ideally, cells would have also an id to identify each one of them after rendering
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