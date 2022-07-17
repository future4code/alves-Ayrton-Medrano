import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import { useAuthorizedUser } from '../../Hooks/useAuthorizedPage'
import Styled from 'styled-components'
import { StyledButton } from '../../components/StyledButton'
import { goBack } from '../../routes/Coordinator'

export default function TripDetailsPage() {
  useAuthorizedUser()
  const params = useParams()
  const navigate = useNavigate()
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
    <Container>
      <h3>{detailsList.name}</h3>
      <p>{detailsList.description}</p>
      <p>{detailsList.planet}</p>
      <p>{detailsList.durationInDays}</p>
      <p>{detailsList.date}</p>
      <StyledButton
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </StyledButton>
    </Container>
  )
}
const Container = Styled.div`
text-align: center;
border: 1px solid #F2B705;

`
