import React, { useState, useEffect } from 'react'
import { goBack } from '../routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'
import { goToTripDetails, goToCreateTrip } from '../routes/Coordinator'
import { useAuthorizedUser } from '../Hooks/useAuthorizedPage'
import Styled from 'styled-components'
import { StyledButton } from '../components/StyledButton'

export default function AdminHomePage() {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])
  const token = localStorage.getItem('token')
  const [deletedTrip, setDeletedTrip] = useState(true)

  useAuthorizedUser()

  const getList = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then(res => {
        setTrips(res.data.trips)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getList()
  }, [deletedTrip])
  const adminList = trips.map(trip => {
    return (
      <CardContainer key={trip.id}>
        <h2>{trip.name}</h2>

        <StyledButton onClick={() => goToTripDetails(navigate, trip.id)}>
          Ver Detalhes
        </StyledButton>
        <StyledButton onClick={() => deleteTrip(trip.id)}>
          Excluir Viagem
        </StyledButton>
      </CardContainer>
    )
  })
  const deleteTrip = id => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, { headers: { auth: token } })
      .then(res => {
        alert('Viagem Deletada')
        setDeletedTrip(!deletedTrip)
      })
      .catch(err => {
        console.log(err)
      })
  }
  console.log(trips)
  return (
    <Container>
      <h1>Painel Administrativo</h1>
      <StyledButton
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </StyledButton>
      <StyledButton onClick={() => goToCreateTrip(navigate)}>
        Criar viagem
      </StyledButton>
      <StyledButton>Logout</StyledButton>
      {adminList}
    </Container>
  )
}
const Container = Styled.div`
text-align: center;
font-size: 20px;
`
const CardContainer = Styled.div`
border: 1px solid #F2B705;

`
