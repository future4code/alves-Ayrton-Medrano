import React from 'react'

export default class SegundaTela extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <form>
          <p>5. Qual curso?</p>

          <input type="text" placeholder="Digite aqui a graduação" />

          <p>6. Qual a unidade de ensino?</p>

          <input placeholder="Digite aqui a instituição" />
        </form>
        <button type="submit">Próxima Etapa</button>
      </div>
    )
  }
}
