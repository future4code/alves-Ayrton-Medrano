import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import { goBack } from '../../routes/Coordinator'
import Styled from 'styled-components'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { ContainerForm, Form, Input, Select, ButtonForm } from './Styled'
import { Countries } from '../../components/Countries'
import { StyledButton } from '../../components/StyledButton'

export default function ApplicationFormPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { form, onChange, clearForm } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })
  const catchInputChange = event => {
    const { value, name } = event.target
    onChange(value, name)
  }
  const onSubmitApplication = event => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/trips/${id}/apply`, form)
      .then(res => {
        alert('Obrigado por se inscrever!')
        clearForm()
      })
      .catch(err => {
        console.log(err)
        console.log(form)
      })
  }

  return (
    <div>
      <ContainerForm>
        <h1>Formulário de Inscrição</h1>
        <Form onSubmit={onSubmitApplication}>
          <Input
            value={form.name}
            placeholder={'Nome'}
            onChange={catchInputChange}
            name={'name'}
            type={'text'}
            pattern={'(.*[a-z]){3}'}
            title="O nome deve ter ao menos 3 letras"
            required
          />

          <Input
            value={form.age}
            placeholder={'Idade'}
            onChange={catchInputChange}
            name={'age'}
            type={'number'}
            min="18"
            title="você deve ter pelo menos 18 anos para se inscrever"
            required
          />
          <Input
            value={form.profession}
            placeholder={'Profissão'}
            onChange={catchInputChange}
            name={'profession'}
            type={'text'}
            pattern={'(.*[a-z]){10}'}
            title="A profissão deve ter ao menos 10 caracteres"
            required
          />
          <Select
            placeholder={'País'}
            onChange={catchInputChange}
            value={form.country}
            name={'country'}
            type={'text'}
          >
            <Countries />
          </Select>

          <Input
            value={form.applicationText}
            placeholder={'Por que quer se candidatar?'}
            onChange={catchInputChange}
            name={'applicationText'}
            type={'text'}
            pattern={'(.*[a-z]){30}'}
            title="O texto de candidatura deve ter ao menos 30 caracteres"
            required
          />
          <StyledButton onClick={onSubmitApplication}>
            Inscrever-se
          </StyledButton>
        </Form>
      </ContainerForm>
    </div>
  )
}
