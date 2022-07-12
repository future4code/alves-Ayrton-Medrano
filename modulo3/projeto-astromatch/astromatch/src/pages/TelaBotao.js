import React from 'react'
import Limpar from '../components/Limpar'
import Header from '../components/Header'
import Styled from 'styled-components'
//Styled
const CardPerfil = Styled.div`
  text-align: center;
  justify-content: center;
  border: 52px solid black;
  border-radius:10%;
  max-height: auto;
  width: 400px;
  padding: 16px;
  color:#861405 ;
  font-family:roboto,sans-serif;
  font-size: 18px;
  background-color: white;
  `
const Container = Styled.div`
width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
background-color: #f9f9f9;
opacity: 1;
background-image:  radial-gradient(#861405 1.9500000000000002px, transparent 1.9500000000000002px), radial-gradient(#861405 1.9500000000000002px, #f9f9f9 1.9500000000000002px);
background-size: 78px 78px;
background-position: 0 0,39px 39px;
`
const Espacamento = Styled.div`
height:300px;
`
export default function TelaBotao(props) {
  return (
    <Container>
      <CardPerfil>
        <Header trocandoEstado={props.trocandoEstado} />
        <Espacamento />
        <Limpar pegarPerfil={props.pegarPerfil} />
      </CardPerfil>
    </Container>
  )
}
