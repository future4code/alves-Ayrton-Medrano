//Importações
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Cabecalho from './components/Cabecalho.js'
import MinhasPlaylists from './components/MinhasPlaylists.js'

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

export default class App extends React.Component {
  state = {
    pagina: 'home'
  }

  // Funções

  // irParaHome = () => {
  //   this.setState({ pagina: 'home' })
  // }
  // irParaPlaylist = () => {
  //   this.setState({ pagina: 'playlist' })
  // }
  escolherTelaCase = () => {
    if (this.state.pagina === 'home') {
      return <App />
    } else if (this.state.pagina === 'playlist') {
      return <MinhasPlaylists />
    }
  }

  render() {
    return (
      <div>
        {this.escolherTelaCase()}
        <Background>
          <Cabecalho />
          <StyleButton onclick={this.setState({ pagina: 'home' })}>
            Home
          </StyleButton>
          <StyleButton onclick={this.setState({ pagina: 'playlist' })}>
            Minhas Playlists
          </StyleButton>
          <h1>HOME</h1>
        </Background>
      </div>
    )
  }
}
