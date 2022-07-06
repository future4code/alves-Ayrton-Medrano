import React from 'react'
import Styled from 'styled-components'
import Logo from '../assets/Capturar.png'
import Button1 from '../assets/button1.png'

//Estilização
const Cabecalho = Styled.div`
  display: flex;
  justify-content: space-between;
  width:400px;
  
`
const Image = Styled.img`
max-width:200px;
max-height:100px;

`
const Button = Styled.img`
max-width:32px;
max-height:32px;
margin-top:20px;
cursor: pointer;

`

export default function Header() {
  return (
    <>
      <Cabecalho>
        <Image src={Logo} alt="Texto Astrodev com fundos de coração" />
        <Button src={Button1} alt="imagem de um coracao e 2 celulares" />
      </Cabecalho>
      <hr />
    </>
  )
}
