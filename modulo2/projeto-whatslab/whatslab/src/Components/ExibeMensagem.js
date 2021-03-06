import React from 'react'
import styled from 'styled-components'

const UserName = styled.h4`
  margin: 0;
  display: flex;
  align-self: flex-end;
  max-height: auto;
`
const UserMsg = styled.p`
  margin: 0;
  max-height: auto;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-items: center;
`

class ExibeMensagem extends React.Component {
  state = {}

  render() {
    return (
      <div onDoubleClick={this.deletaMensagem}>
        <UserName>{this.props.remetente}</UserName>
        <UserMsg>{this.props.conteudo}</UserMsg>
      </div>
    )
  }
}

export default ExibeMensagem
