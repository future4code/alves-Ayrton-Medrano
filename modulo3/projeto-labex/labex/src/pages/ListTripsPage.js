import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/BASE_URL'
import { goBack } from '../routes/Coordinator'
import { goToForm } from '../routes/Coordinator'
import { StyledButton } from '../components/StyledButton'

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
      <Cards key={trip.id}>
        <h3>{trip.name}</h3>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p>{trip.durationInDays}</p>
        <p>{trip.date}</p>
        <StyledButton
          onClick={() => {
            goToForm(navigate)
          }}
        >
          Inscrever-se
        </StyledButton>
      </Cards>
    )
  })

  return <Container>{mapTripsList}</Container>
}

const Container = Styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;



`
const Cards = Styled.div`
width:70%;
margin:1em;
border:solid 2px;
padding:1em;
background-color: rgba(0,0,0,0.5);
p,h3{
 color:#F2B705;
}

`
