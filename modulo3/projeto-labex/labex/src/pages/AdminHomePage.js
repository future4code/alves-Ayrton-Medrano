import React, { useState, useEffect } from 'react'
import { goBack } from '../routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'
import { goToTripDetails, goToCreateTrip } from '../routes/Coordinator'
import { useAuthorizedUser } from '../Hooks/useAuthorizedPage'

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
      <div key={trip.id}>
        <p>{trip.name}</p>

        <button onClick={() => goToTripDetails(navigate, trip.id)}>
          Ver Detalhes
        </button>
        <button onClick={() => deleteTrip(trip.id)}>Excluir Viagem</button>
        <hr />
      </div>
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
    <div>
      <h1>Painel Administrativo</h1>
      <button
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
      <button>Logout</button>
      {adminList}
    </div>
  )
}
