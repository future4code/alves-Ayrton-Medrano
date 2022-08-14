import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FeedPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="signup" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
