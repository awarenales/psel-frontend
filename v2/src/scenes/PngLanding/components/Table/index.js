import React, {Component} from 'react';
import Actions from './action';

export class Table extends Component {
	render() {
		return (
				<table className="container-table">
					<thead>
					<tr>
						<th>Status</th>
						<th>Número</th>
						<th>Emissão</th>
						<th>Fornecedor</th>
						<th>Valor</th>
						<th>CNPJ</th>
						<th>Ação</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							<div className="label-status">
								AUTORIZADA
							</div>
						</td>
						<td>999999</td>
						<td>04/10/2018</td>
						<td>COMERCIAL JAHU BORRACHAS E AUTO PEÇAS LTDA</td>
						<td>R$974,00</td>
						<td>10.101.010/1010-10</td>
						<td>
							<Actions />
						</td>
					</tr>
					</tbody>
				</table>
		);
	}
}