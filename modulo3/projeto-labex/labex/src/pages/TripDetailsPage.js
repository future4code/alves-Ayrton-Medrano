import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/BASE_URL'
import { useAuthorizedUser } from '../Hooks/useAuthorizedPage'

export default function TripDetailsPage() {
  useAuthorizedUser()
  const params = useParams()
  const [detailsList, setDetailsList] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')

    axios
      .get(`${BASE_URL}/trip/${params.id}`, { headers: { auth: token } })
      .then(res => {
        setDetailsList(res.data.trip)
      })
      .catch(err => {
        console.log('Deu Erro', err)
      })
  }, [])

  return (
    <div>
      <p>{detailsList.name}</p>
      <p>{detailsList.description}</p>
      <p>{detailsList.planet}</p>
      <p>{detailsList.durationInDays}</p>
      <p>{detailsList.date}</p>
    </div>
  )
}
