import React from 'react'
import { useAuthorizedUser } from '../../hooks/useAuthorizedUser'

export default function PostPage() {
  useAuthorizedUser()
  return <div>PostPage</div>
}
