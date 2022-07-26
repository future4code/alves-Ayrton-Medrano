import React from 'react'
import useForm from '../../hooks/useForm'
import { goToRegistrationPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import {
  ScreenContainer,
  LoginForm,
  ContinueButton,
  SignUpButton,
  LoginInput,
  Title,
  Texto
} from './Styled'
import Logo from '../../components/Logo'
import { login } from '../../services/users'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

export default function LoginPage() {
  const [form, onChange, clear] = useForm({ email: '', password: '' })
  const navigate = useNavigate()
  useUnprotectedPage()

  const onSubmitForm = event => {
    event.preventDefault()
    login(form, clear, navigate)
  }

  return (
    <ScreenContainer>
      <Logo />
      <LoginForm onSubmit={onSubmitForm}>
        <Title>Lab-Devs</Title>
        <Texto>Bem vindo a rede social da tecnologia</Texto>
        <LoginInput
          placeholder={'E-mail'}
          name={'email'}
          value={form.email}
          onChange={onChange}
          required
          type={'email'}
        />
        <LoginInput
          placeholder={'Senha'}
          name={'password'}
          value={form.password}
          onChange={onChange}
          type={'password'}
          required
        />
        <ContinueButton type={'submit'} onClick={login}>
          Continuar
        </ContinueButton>
        <SignUpButton onClick={() => goToRegistrationPage(navigate)}>
          Crie uma conta
        </SignUpButton>
      </LoginForm>
    </ScreenContainer>
  )
}
