import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
`

export default class SegundaTela extends React.Component {
  state = {
    usuarios: []
  }
  componentDidMount() {
    this.pegarUsuarios()
  }
  pegarUsuarios = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios
      .get(url, {
        headers: {
          Authorization: 'ayrton-medrano-alves'
        }
      })
      .then(res => {
        this.setState({ usuarios: res.data })
      })
      .catch(err => {
        alert('Ocorreu um problema')
      })
  }

  render() {
    const listaUsuarios = this.state.usuarios.map(user => {
      return <CardUsuario key={user.id}>{user.name}</CardUsuario>
    })

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>
          Ir para tela de Cadastro
        </button>
        <h2>Lista de Usuários</h2>
        {listaUsuarios}
      </div>
    )
  }
}
