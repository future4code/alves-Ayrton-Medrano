import React from 'react'
import Styled from 'styled-components'

export default function Header() {
  return (
    <MainContainer>
      <Titulo>
        <h1>Labe-X</h1>
        <h2>Sua agência de viagens</h2>
      </Titulo>
      <Hamburguer>
        <button>Menu</button>
      </Hamburguer>
    </MainContainer>
  )
}
const MainContainer = Styled.div`
width: 100%;
height: 15%;
border-bottom: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;

`
const Titulo = Styled.div`
`
const Hamburguer = Styled.div`
`
