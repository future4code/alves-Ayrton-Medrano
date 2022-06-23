//Importações
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Cabecalho from './components/Cabecalho.js'
import Playslists from './components/MinhasPlaylists.js'
//Estilização

const Background = styled.div`
  background-image: radial-gradient(#ffffff 1px, transparent 1px),
    radial-gradient(#ffffff 1px, transparent 1px);
  background-size: 59px 59px;
  background-position: 0 0, 29.5px 29.5px;
  background-color: #202020;
  font-family: roboto;
  font-size: 38px;
  color: white;
  width: 100%;
  height: 100vh;
`
const StyleButton = styled.button`
  display: block;
  padding: 20px;
  margin-top: 50px;
  width: 20%;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  :hover {
    background-color: white;
    color: black;
  }
`
//Variaveis
const home = 'home'
const playlist = 'playlist'

export default class App extends React.Component {
  state = {
    pagina: ''
  }
  //Funções

  mudarTela = nomeTela => {
    this.setState({ telaAtual: nomeTela })
  }
  escolherTelaCase = () => {
    switch (this.state.telaAtual) {
      case 'home':
        return <App.js />
      default:
        return <Playslists />
    }
  }
  render() {
    return (
      <Background>
        <Cabecalho />
        <StyleButton onclick={this.mudarTela}>Home</StyleButton>
        <StyleButton onclick={this.mudarTela}>Minhas Playlists</StyleButton>
      </Background>
    )
  }
}
