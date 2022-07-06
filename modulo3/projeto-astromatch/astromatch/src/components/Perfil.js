import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import Header from '../components/Header'
import Like from '../assets/like.png'
import Dislike from '../assets/dislike.png'

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
`
const Foto = Styled.img`
max-width:300px;
max-height:300px;
border-radius: 10%;
-webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
`
const Container = Styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: center;
`
const StyledButton = Styled.img`
padding-right: 40px;
padding-left: 40px;
cursor: pointer;

`

//Functions
export default function Perfil() {
  const [perfil, setPerfil] = useState({})

  //Get profiles
  const pegarPerfil = () => {
    axios
      .get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/person'
      )
      .then(res => {
        setPerfil(res.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    pegarPerfil()
  }, [])
  //Limpar matches
  const limparMatches = () => {
    axios
      .put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/clear'
      )
      .then(() => {
        alert('Seus matches foram zerados')
      })
      .catch(err => {
        console.log(err)
      })
  }
  //Enviar Id
  const enviarMatches = () => {
    console.log(perfil.id)
    const match = {
      id: perfil.id,
      choice: true
    }
    axios
      .post(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ayrton-oliveira-medrano/choose-person',
        match
      )
      .then(() => {
        pegarPerfil()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container>
      <CardPerfil>
        <Header />

        <Foto src={perfil.photo} alt={perfil.photo_alt} />
        <h2>
          {perfil.name}, {perfil.age}
        </h2>
        <p>{perfil.bio}</p>
        <StyledButton src={Dislike} onClick={pegarPerfil} />
        <StyledButton src={Like} onClick={enviarMatches} />
        <button onClick={limparMatches}>Limpar Matches</button>
      </CardPerfil>
    </Container>
  )
}
