import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PrimeiraTela from './components/PrimeiraTela'
import SegundaTela from './components/SegundaTela'

class App extends React.Component {
  state = {
    telaAtual: 'cadastro'
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'cadastro':
        return <PrimeiraTela irParaLista={this.irParaLista} />
      case 'lista':
        return <SegundaTela irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Página não encontrada</div>
    }
  }
  irParaCadastro = () => {
    this.setState({ telaAtual: 'cadastro' })
  }
  irParaLista = () => {
    this.setState({ telaAtual: 'lista' })
  }

  render() {
    return <div>{this.escolheTela()}</div>
  }
}
export default App
