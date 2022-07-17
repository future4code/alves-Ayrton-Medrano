import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/Coordinator'
import { useAuthorizedUser } from '../../Hooks/useAuthorizedPage'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { Container, Form, Input, Select } from './styled'
import { StyledButton } from '../../components/StyledButton'

export default function CreateTripPage() {
  const navigate = useNavigate()
  useAuthorizedUser()

  const catchInputChange = e => {
    const { value, name } = e.target
    onChange(value, name)
  }

  const createTrip = e => {
    const token = localStorage.getItem('token')
    e.preventDefault()
    axios
      .post(`${BASE_URL}/trips`, form, { headers: { auth: token } })
      .then(() => {
        alert('Formulário enviado com sucesso!')
        clearForm()
      })
      .catch(err => {
        console.log('Deu Erro', err)
        console.log(form)
      })
  }
  const { form, onChange, clearForm } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 0
  })

  return (
    <Container>
      <h1>Criar Viagem</h1>
      <Form onSubmit={createTrip}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={catchInputChange}
          pattern={'(.*[a-z]){5}'}
          required
        />
        <Select
          placeholder={'Planeta'}
          onChange={catchInputChange}
          value={form.planet}
          name={'planet'}
          type={'text'}
          required
        >
          <option key="Mercúrio" value="Mercúrio">
            Mercúrio
          </option>
          <option key="Vênus" value="Vênus">
            Vênus
          </option>
          <option key="Terra" value="Terra">
            Terra
          </option>
          <option key="Marte" value="Marte">
            Marte
          </option>
          <option key="Júpter" value="Júpter">
            Júpter
          </option>
          <option key="Saturno" value="Saturno">
            Saturno
          </option>
          <option key="Urano" value="Urano">
            Urano
          </option>
          <option key="Netuno" value="Netuno">
            Netuno
          </option>
          <option key="Plutão" value="Plutão">
            Plutão
          </option>
        </Select>
        <Input
          type="date"
          name="date"
          value={form.date}
          onChange={catchInputChange}
        />
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={catchInputChange}
          // pattern={'(.*[a-z]){30}'}
          required
        />
        <Input
          type="number"
          placeholder="Duração em dias"
          name="durationInDays"
          value={form.durationInDays}
          onChange={catchInputChange}
          min="50"
          required
        />
        <StyledButton>Criar</StyledButton>
      </Form>
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
