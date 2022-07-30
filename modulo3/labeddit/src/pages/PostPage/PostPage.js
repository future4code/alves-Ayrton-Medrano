import React from 'react'
import { useAuthorizedUser } from '../../hooks/useAuthorizedUser'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import {
  ScreenContainer,
  PostButton,
  UserName,
  PostCard,
  BodyText,
  InputBody,
  DivLike
} from './Styled'
import { createComment, likePost, dislikePost } from '../../services/posts'
import useForm from '../../hooks/useForm'
import Header from '../../components/Header/Header'
import up from '../../assets/up.png'
import down from '../../assets/down.png'

export default function PostPage() {
  useAuthorizedUser()
  const params = useParams()
  const [form, onChange, clear] = useForm({ comment: '' })
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

  const likeCounter = id => {
    const body = {
      direction: 1
    }
    likePost(body, id)
  }
  const disLikeCounter = id => {
    const body = {
      direction: -1
    }
    dislikePost(body, id)
  }

  const commentsCards = comments.map(comments => {
    return (
      <PostCard key={comments.id}>
        <UserName>Enviado por: {comments.username}</UserName>
        <BodyText>{comments.body}</BodyText>
        <DivLike>
          <img src={up} onClick={() => likeCounter(comments.id)} />
          <UserName>{comments.voteSum ? comments.voteSum : 0}</UserName>
          <img src={down} onClick={() => disLikeCounter(comments.id)} />
        </DivLike>
      </PostCard>
    )
  })
  const onSubmitForm = event => {
    event.preventDefault()
    createComment(form, params.id)
  }
  return (
    <ScreenContainer>
      <Header />
      <form onSubmit={onSubmitForm}>
        <InputBody
          type="text"
          placeholder="Adicionar Comentário"
          name={'comment'}
          value={form.comment}
          onChange={onChange}
        />

        <PostButton>Comentar</PostButton>
      </form>
      {commentsCards}
    </ScreenContainer>
  )
}
