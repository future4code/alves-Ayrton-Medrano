import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'
import { goBack } from '../routes/Coordinator'

export default function LoginPage() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const login = () => {
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
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={getEmail}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={getPassword}
      />
      <button
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </button>
      <button onClick={login}>Entrar</button>
    </div>
  )
}
