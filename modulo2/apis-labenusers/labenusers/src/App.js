import styled from 'styled-components'
import axios from 'axios'

function App() {
  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <label for="nome">
        <input type="text" placeholder="Digite seu nome" />
      </label>
      <label for="email">
        <input type="text" placeholder="Digite seu e-mail" />
      </label>
      <button>Cadastre-se</button>
      <br />
      <button>Tela de descrição</button>
    </div>
  )
}

export default App
