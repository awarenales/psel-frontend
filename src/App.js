class App extends React.Component {
    handleTitleClick() {
        alert("you clicked the title");
    }
    render() {
        return React.createElement("div", {},
            React.createElement('h1', { onClick: this.handleTitleClick }, 'arquivei')
    )
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))

/* <div id="background">
<div id="header1"></div>
<div class="subtitle">
    <p>Seu CNPJ / Razão Social:<br>
    <b>[SP] [19.427.033/0001-40] ARQUIVEI SERVICOS ON LINE LTDA</b></p>
</div>
<div class="line"></div>
<div id="header2">
    <p>Existem novas notas contra seu CNPJ</p>
</div>
<table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><i class="fas fa-download"></i><i class="fas fa-eye"></i></td>
  </tr>
</table>
<div class="square">
    <p>hello wonderful world</p>
</div>
</div> */