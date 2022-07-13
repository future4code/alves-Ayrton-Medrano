import React from 'react'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../routes/Coordinator'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <ButtonTrip onClick={() => goToListTrip(navigate)}>Viagens</ButtonTrip>
      <ButtonLogin onClick={() => goToLogin(navigate)}>Login</ButtonLogin>
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
