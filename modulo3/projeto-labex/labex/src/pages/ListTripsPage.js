import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/BASE_URL'
import { goBack } from '../routes/Coordinator'
import { goToForm } from '../routes/Coordinator'

export default function Trips() {
  const [tripsList, setTripsList] = useState([])
  const navigate = useNavigate()

  const getList = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then(res => {
        setTripsList(res.data.trips)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getList()
  }, [])
  const mapTripsList = tripsList.map(trip => {
    return (
      <div key={trip.id}>
        <p>{trip.name}</p>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
        <hr />
      </div>
    )
  })

  return (
    <div>
      <h1>Trips</h1>
      <button
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </button>
      <button
        onClick={() => {
          goToForm(navigate)
        }}
      >
        Inscrever-se
      </button>
      {mapTripsList}
    </div>
  )
}
