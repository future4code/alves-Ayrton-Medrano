import React from 'react'
import styled from 'styled-components'
import OwnMsgTemplate from './Components/OwnMsgTemplate'
import OtherMsgTemplate from './Components/OtherMsgTemplate'

//Styles
const AppContainer = styled.div`
  border: 2px solid black;
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex
  flex-direction: column-reverse;
  align-items: center;
`
const MainContainer = styled.div`
  background-color: #e5dfd5;
  border: 2px solid black;
  border-radius: 8px;
  overflow: auto;
  max-width: 100%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const FormContainer = styled.div`
  position: static;
  width: 100%;
  display: flex;
  justify-content: center;
`
const InputRemetente = styled.input`
  width: 15%;
`
const InputConteudo = styled.input`
  width: 75%;
`
//Functions
class App extends React.Component {
  state = {
    listaDeMensagens: [],
    valorInputRemetente: '',
    valorinputConteudo: ''
  }

  onChangeInputRemetente = event => {
    this.setState({ valorInputRemetente: event.target.value })
  }

  onChangeInputConteudo = event => {
    this.setState({ valorInputConteudo: event.target.value })
  }

  onKeyDownEnter = event => {
    if (event.key === 'Enter') {
      this.adicionaMensagem()
    }
  }
  adicionaMensagem = () => {
    const novaMensagem = {
      remetente: this.state.valorInputRemetente,
      conteudo: this.state.valorInputConteudo
    }

    const novasMensagens = this.state.listaDeMensagens
    novasMensagens.push(novaMensagem)

    this.setState({ listaDeMensagens: novasMensagens, valorInputConteudo: '' })
  }
  render() {
    const listaDeMensagensNaTela = this.state.listaDeMensagens.map(mensagem => {
      if (mensagem.remetente.toLowerCase() !== 'eu') {
        return (
          <OtherMsgTemplate
            remetente={mensagem.remetente}
            conteudo={mensagem.conteudo}
          />
        )
      } else if (mensagem.remetente.toLowerCase() === 'eu') {
        return (
          <OwnMsgTemplate
            remetente={mensagem.remetente}
            conteudo={mensagem.conteudo}
          />
        )
      }
    })

    return (
      <AppContainer>
        <MainContainer>{listaDeMensagensNaTela}</MainContainer>
        <FormContainer>
          <InputRemetente
            value={this.state.valorInputRemetente}
            onChange={this.onChangeInputRemetente}
            placeholder={'Usuário'}
          />
          <InputConteudo
            value={this.state.valorInputConteudo}
            onChange={this.onChangeInputConteudo}
            onKeyDown={this.onKeyDownEnter}
            placeholder={'Mensagem'}
          />
          <button onClick={this.adicionaMensagem}>ENVIAR</button>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default App
