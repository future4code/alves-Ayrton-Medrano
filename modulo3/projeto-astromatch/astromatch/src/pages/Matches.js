import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import Header from '../components/Header'
import axios from 'axios'
import Limpar from '../components/Limpar'

export default function Matches(props) {
  const [matchUsuario, setMatchUsuario] = useState([])

  const pegarMatches = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/matches'
      )
      .then(res => {
        setMatchUsuario(res.data.matches)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    pegarMatches()
  }, [])
  const mostrarMatches = matchUsuario.map(usuario => {
    return (
      <Lista>
        <Foto src={usuario.photo} key={usuario.id} />
        <Texto>{usuario.name}</Texto>
      </Lista>
    )
  })
  const limparEstado = () => {
    setMatchUsuario([])
  }
  return (
    <Container>
      <CardPerfil>
        <Header trocandoEstado={props.trocandoEstado} />
        {mostrarMatches}
        <Limpar limparEstado={limparEstado} />
      </CardPerfil>
    </Container>
  )
}
//Estilização
const CardPerfil = Styled.div`
  text-align: center;
  justify-content: center;
  border: 52px solid black;
  border-radius:10%;
  max-height: auto;
  width: 400px;
  height: auto;
  padding: 16px;
  color:#861405 ;
  font-family:roboto,sans-serif;
  font-size: 18px;
  background-color:white;

`
const Container = Styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: center;
background-color: #f9f9f9;
opacity: 1;
background-image:  radial-gradient(#861405 1.9500000000000002px, transparent 1.9500000000000002px), radial-gradient(#861405 1.9500000000000002px, #f9f9f9 1.9500000000000002px);
background-size: 78px 78px;
background-position: 0 0,39px 39px;
`
const Lista = Styled.div`
display: flex;
flex-direction: row;
padding:10px;
`

const Foto = Styled.img`
border-radius:50%;
width:64px;
height:64px;
`
const Texto = Styled.p`
margin-left:5%;
border-bottom:1px solid #861405;`
