import React, { useState } from 'react'
import styles from './navbar.css'
import { NavLink } from './NavLink'
import {
  goToHome,
  goToLogin,
  goBack,
  goToListTrip
} from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  // const navigate = useNavigate()

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? 'X' : 'Menu'}</button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li onClick={() => goToHome()}>Home</li>
        <li>Login</li>
        <li>Viagens</li>
        <li>Voltar</li>
      </ul>
    </nav>
  )
}
