import React from 'react'
import Styled from 'styled-components'
import Labex from '../assets/background.png'
import Navbar from './Navbar/Navbar'

export default function Header() {
  return (
    <MainContainer>
      <Titulo>
        <img src={Labex} />
      </Titulo>
      <Hamburguer>
        <Navbar />
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
width:100vw;


`
const Titulo = Styled.div`

`
const Hamburguer = Styled.div`
padding: 5%;
`
