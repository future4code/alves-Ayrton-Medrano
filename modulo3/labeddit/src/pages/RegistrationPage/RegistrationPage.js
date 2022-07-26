import React from 'react'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import Header from '../../components/Header/Header'
import Styled from 'styled-components'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/users'
import { useNavigate } from 'react-router-dom'
import {
  ScreenContainer,
  LoginForm,
  SignUpButton,
  NameInput,
  EmailInput,
  PasswordInput,
  Title,
  Texto
} from './Styled'

export default function RegistrationPage() {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const onSubmitForm = event => {
    event.preventDefault()
    signUp(form, clear, navigate)
    console.log('Testando form', form)
  }
  return (
    <>
      <Header />
      <ScreenContainer>
        <LoginForm onSubmit={onSubmitForm}>
          <Title>Lab-Devs</Title>
          <Texto>Venha viver a nova era tecnológica</Texto>
          <NameInput
            placeholder={'Nome do usuário'}
            name={'username'}
            value={form.username}
            onChange={onChange}
            required
            type={'text'}
          />
          <EmailInput
            placeholder={'E-mail'}
            name={'email'}
            value={form.email}
            onChange={onChange}
            required
            type={'email'}
          />
          <PasswordInput
            placeholder={'Senha'}
            name={'password'}
            value={form.password}
            onChange={onChange}
            type={'password'}
            required
          />
          <SignUpButton type={'submit'} onClick={signUp}>
            Cadastrar-se
          </SignUpButton>
        </LoginForm>
      </ScreenContainer>
    </>
  )
}
