import React from 'react'
import Styled from 'styled-components'
import Labex from '../assets/background.png'

export default function Header() {
  return (
    <MainContainer>
      <Titulo>
        <img src={Labex} />
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
display: flex;
justify-content: space-between;
align-items: center;
background-color: #092047;
color: white;

`
const Titulo = Styled.div`

`
const Hamburguer = Styled.div`
padding: 2%;
`
