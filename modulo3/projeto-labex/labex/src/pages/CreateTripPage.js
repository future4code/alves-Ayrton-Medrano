import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/Coordinator'
import { useAuthorizedUser } from '../Hooks/useAuthorizedPage'
import useForm from '../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'

export default function CreateTripPage() {
  const navigate = useNavigate()
  useAuthorizedUser()

  const createTrip = e => {
    const token = localStorage.getItem('token')
    e.preventDefault()
    axios
      .post(`${BASE_URL}/trips`, form, { headers: { auth: token } })
      .then(() => {
        alert('Formulário enviado com sucesso!')
        cleanInputs()
      })
      .catch(err => {
        console.log('Deu Erro', err)
        console.log(form)
      })
  }
  const { form, onChange, cleanInputs } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 0
  })

  return (
    <div>
      <h1>Criar Viagem</h1>
      <form onSubmit={createTrip}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Planeta"
          name="planet"
          value={form.planet}
          onChange={onChange}
        />
        <input type="date" name="date" value={form.date} onChange={onChange} />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Duração em dias"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
        />
        <button>Criar</button>
      </form>
      <button
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </button>
    </div>
  )
}
