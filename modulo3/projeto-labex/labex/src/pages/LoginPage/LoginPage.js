import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorPage from '../ErrorPage'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { goBack } from '../../routes/Coordinator'
import { StyledButton } from '../../components/StyledButton'
import { Input, Container, Form } from './styled'

export default function LoginPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    const body = {
      email: email,
      password: password
    }

    axios
      .post(`${BASE_URL}/login`, body)
      .then(res => {
        window.localStorage.setItem('token', res.data.token)
        navigate('/admin/trips/list')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getEmail = e => {
    setEmail(e.target.value)
  }
  const getPassword = e => {
    setPassword(e.target.value)
  }
  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={login}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={getEmail}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={getPassword}
          required
        />

        <StyledButton
          onClick={() => {
            goBack(navigate)
          }}
        >
          Voltar
        </StyledButton>
        <StyledButton>Entrar</StyledButton>
      </Form>
    </Container>
  )
}
