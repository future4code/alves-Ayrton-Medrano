import React from 'react'
import Router from './routes/Router'
import Styled from 'styled-components'
import Header from './components/Header'
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
min-width:100vw;
background-color: #092047;
color:#F2B705;

`
