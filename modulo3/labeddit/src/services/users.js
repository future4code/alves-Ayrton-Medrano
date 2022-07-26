import axios from 'axios'
import { goToFeedPage } from '../routes/Coordinator'
import { BASE_URL } from '../constants/BASE_URL'

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      clear()
      alert('Login realizado com sucesso')
      goToFeedPage(navigate)
    })
    .catch(err => alert(err.response.data))
}

export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      clear()
      alert('Usuário Cadastrado com sucesso')
      goToFeedPage(navigate)
    })
    .catch(err => alert(err.response.data))
}
