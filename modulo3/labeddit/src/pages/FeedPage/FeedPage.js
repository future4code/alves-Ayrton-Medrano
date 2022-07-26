import React from 'react'
import { useAuthorizedUser } from '../../hooks/useAuthorizedUser'

export default function FeedPage() {
  useAuthorizedUser()
  return <div>FeedPage</div>
}
