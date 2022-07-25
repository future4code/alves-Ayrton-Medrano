import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../../routes/Coordinator'
import { ButtonTrip, ButtonLogin, Container, Img } from './styled'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <ButtonTrip onClick={() => goToListTrip(navigate)}>Viagens</ButtonTrip>
      <ButtonLogin onClick={() => goToLogin(navigate)}>Login</ButtonLogin>
    </div>
  )
}
