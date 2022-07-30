import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'

const token = localStorage.getItem('token')

export const createPost = (body, clear) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: { Authorization: token }
    })
    .then(res => {
      alert('Seu Post foi criado com sucesso')
      clear()
    })
    .catch(err => alert(err.response.data))
}

export const likePost = (body, id) => {
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: { Authorization: token }
    })
    .then(res => {
      alert(res.data)
    })
    .catch(err => {
      alert(err.response.message)
    })
}
export const dislikePost = (body, id) => {
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: { Authorization: token }
    })
    .then(() => {
      alert('Voto computado')
    })
    .catch(err => {
      alert(err.response.message)
    })
}
export const createComment = (body, id) => {
  console.log(id, body)
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: { Authorization: token }
    })
    .then(() => {
      alert('Seu comentário foi publicado')
    })
    .catch(err => console.log(err))
}
