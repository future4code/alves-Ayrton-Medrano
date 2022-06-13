import React from 'react'
import SegundaTela from './SegundaTela'

export default class Inputs extends React.Component {
  mudarTela = SegundaTela => {
    this.setState({ tela: SegundaTela })
  }
  render() {
    return (
      <div className="form">
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form>
          <p>1. Qual o seu nome?</p>
          <input type="text" placeholder="Digite aqui seu nome" />
          <p>2. Qual a sua idade?</p>
          <input placeholder="Digite aqui sua idade" />
          <p>3. Qual o seu e-mail?</p>
          <input type="text" placeholder="Digite aqui seu e-mail" />
          <p>4. Qual a sua escolaridade?</p>
          <input list="escolaridade" placeholder="Ensino médio incompleto" />
          <datalist id="escolaridade">
            <option value="Ensino médio incompleto" />
            <option value="Ensino médio completo" />
            <option value="Ensino superior incompleto" />
            <option value="Ensino superios completo" />
          </datalist>
          <br />

          <button type="submit" onClick={() => this.mudarTela('SegundaTela')}>
            Próxima etapa
          </button>
        </form>
      </div>
    )
  }
}
