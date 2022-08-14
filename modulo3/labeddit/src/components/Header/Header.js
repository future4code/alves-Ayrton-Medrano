import React, { useState } from 'react'
import LogoHeader from '../Header/LogoHeader'
import { HeaderButton } from './Styled'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../../routes/Coordinator'

export default function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [authButton, setAuthButton] = useState(token ? 'Sair' : 'Entrar')

  const removeToken = () => {
    localStorage.removeItem('token')
  }

  const logout = () => {
    if (token) {
      removeToken()
      setAuthButton('Entrar')
      goToLoginPage(navigate)
    } else {
      goToLoginPage(navigate)
    }
  }

  return (
    <>
      <LogoHeader />
      <HeaderButton onClick={logout}>{authButton}</HeaderButton>
    </>
  )
}
