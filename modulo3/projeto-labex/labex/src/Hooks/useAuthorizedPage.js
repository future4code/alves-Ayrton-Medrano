import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuthorizedUser = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token === null) {
      alert('Por favor faça login')
      navigate('/login')
    }
  }, [])
}
