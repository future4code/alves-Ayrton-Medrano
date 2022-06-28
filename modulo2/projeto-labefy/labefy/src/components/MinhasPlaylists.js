import React from 'react'
import styled from 'styled-components'
import Cabecalho from './Cabecalho'

export default class MinhasPlaylists extends React.Component {
  render() {
    return (
      <Background>
        <Cabecalho />
        <StyleButton onclick={this.irParaHome}>Home</StyleButton>
        <StyleButton onclick={this.irParaPlaylist}>
          Minhas Playlists
        </StyleButton>
        <h1> Playlists</h1>
      </Background>
    )
  }
}
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
