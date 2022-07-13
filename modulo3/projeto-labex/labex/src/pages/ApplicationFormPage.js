import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../constants/BASE_URL'
import { CountrySelect } from '../constants/Country'
import { goBack } from '../routes/Coordinator'

export default function ApplicationFormPage() {
  const navigate = useNavigate()
  const [id, setId] = useState()

  // const sendToForm=()=> {
  // axios.post(`${BASE_URL}/`)
  // }

  return (
    <div>
      <p>ApplicationFormPage</p>
      <select name="Escolha uma viagem">
        <option>{id}</option>
      </select>
      <input type="text" placeholder="Nome" />
      <input type="number" placeholder="Idade" />
      <input type="text" placeholder="Texto de Candidatura" />
      <input type="text" placeholder="Profissão" />
      <button
        onClick={() => {
          goBack(navigate)
        }}
      >
        Voltar
      </button>
      <button>Enviar</button>
    </div>
  )
}
