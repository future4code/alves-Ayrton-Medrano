import React from 'react'
import {
  goToHome,
  goToLogin,
  goBack,
  goToListTrip
} from '../../routes/Coordinator'

export const NavLink = () => {
  return (
    <ul>
      <li>
        <button onClick={goToHome}>Home</button>
      </li>
      <li onClick={console.log('Clicou')}>Login</li>
      <li onClick={goToListTrip}>Viagens</li>
      <li onClick={goBack}>Voltar</li>
    </ul>
  )
}
