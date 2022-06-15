import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'AcordaPedrinho'}
          fotoUsuario={
            'https://catracalivre.com.br/wp-content/uploads/2022/05/pedrinho.jpg'
          }
          fotoPost={
            'https://www.lance.com.br/files/article_main/uploads/2022/05/23/628b89d8056a6.jpeg'
          }
        />
        <Post
          nomeUsuario={'galinhaPintadinha'}
          fotoUsuario={
            'https://yt3.ggpht.com/G-A-BWeZ6ksPLx2dbP6nHdCV1AP9VCZts2_jEUCjH4znyUQqzTIFD-fufy-WwLEiPdxnRI6z=s900-c-k-c0x00ffffff-no-rj'
          }
          fotoPost={
            'https://ogimg.infoglobo.com.br/in/22414637-be4-ffc/FT1086A/68163367.jpg'
          }
        />
      </MainContainer>
    )
  }
}

export default App
