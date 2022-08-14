import React, { useState, useEffect } from 'react'
import { useAuthorizedUser } from '../../hooks/useAuthorizedUser'
import Header from '../../components/Header/Header'
import {
  ScreenContainer,
  PostButton,
  UserName,
  PostCard,
  BodyText,
  InputTitle,
  InputBody,
  DivLike
} from './Styled'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/BASE_URL'
import { goToFeedPage, goToPostPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { createPost, likePost, dislikePost } from '../../services/posts'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import comment from '../../assets/comment.png'

export default function FeedPage() {
  const posts = useRequestData([], `${BASE_URL}/posts`)
  const [form, onChange, clear] = useForm({ title: '', body: '' })
  // const [like, setLike] = useState(false)
  // const [dislike, setDislike] = useState(false)
  useAuthorizedUser()

  // useEffect(() => {
  //   goToFeedPage(navigate)
  // }, [posts])
  const navigate = useNavigate()

  const goToDetails = id => {
    goToPostPage(navigate, id)
  }
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

  const postsCards = posts.map(post => {
    return (
      <PostCard key={post.id}>
        <UserName>Enviado por: {post.username}</UserName>
        <BodyText onClick={() => goToDetails(post.id)}>{post.body}</BodyText>
        <DivLike>
          <img src={up} onClick={() => likeCounter(post.id)} />
          <UserName>{post.voteSum ? post.voteSum : 0}</UserName>
          <img src={down} onClick={() => disLikeCounter(post.id)} />
          <img src={comment} />
          <UserName>{post.commentCount ? post.commentCount : 0}</UserName>
        </DivLike>
      </PostCard>
    )
  })
  const onSubmitForm = event => {
    event.preventDefault()
    createPost(form, clear)
  }
  return (
    <ScreenContainer>
      <Header />
      <form onSubmit={onSubmitForm}>
        <InputTitle
          type="text"
          placeholder="Título do Post"
          name={'title'}
          value={form.title}
          onChange={onChange}
          required
        />
        <InputBody
          type="text"
          placeholder="Conteúdo do Post"
          name={'body'}
          value={form.body}
          onChange={onChange}
          required
        />
        <PostButton>Postar</PostButton>
      </form>
      {postsCards}
    </ScreenContainer>
  )
}
