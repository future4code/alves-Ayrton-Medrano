import React from 'react'
import Styled from 'styled-components'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <ButtonTrip>Viagens</ButtonTrip>
      <ButtonLogin>Login</ButtonLogin>
    </div>
  )
}

const ButtonTrip = Styled.button`
position: absolute;
left: 40%;
top: 50%;
`

const ButtonLogin = Styled.button`
position: absolute;
left: 60%;
top: 50%;
`
