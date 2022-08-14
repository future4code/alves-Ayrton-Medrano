import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuthorizedUser = () => {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login')
    }
  }, [navigate])
}
