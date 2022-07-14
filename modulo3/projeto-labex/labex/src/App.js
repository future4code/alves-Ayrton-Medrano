import React from 'react'
import Router from './routes/Router'
import Header from './components/Header'
import Styled from 'styled-components'

function App() {
  return (
    <PageContainer>
      <Header />
      <Router />
    </PageContainer>
  )
}

export default App

//Estilização
const PageContainer = Styled.div`
min-height:100vh;


`
