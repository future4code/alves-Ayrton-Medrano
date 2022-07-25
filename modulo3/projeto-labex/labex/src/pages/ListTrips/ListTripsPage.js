import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import { StyledButton } from '../../components/StyledButton'
import { Container, Cards } from './styled'

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

  const passIdNavigate = id => {
    navigate(`/trips/application/${id}`)
  }
  const mapTripsList = tripsList.map(trip => {
    return (
      <Cards key={trip.id}>
        <h3>{trip.name}</h3>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
        <StyledButton
          onClick={() => {
            passIdNavigate(trip.id)
          }}
        >
          Inscrever-se
        </StyledButton>
      </Cards>
    )
  })

  return <Container>{mapTripsList}</Container>
}
