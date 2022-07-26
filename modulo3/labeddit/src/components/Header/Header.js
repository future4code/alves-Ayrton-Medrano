import React from 'react'
import LogoHeader from '../Header/LogoHeader'
import { HeaderButton } from './Styled'

export default function Header() {
  return (
    <>
      <LogoHeader />
      <HeaderButton>Entrar</HeaderButton>
    </>
  )
}
