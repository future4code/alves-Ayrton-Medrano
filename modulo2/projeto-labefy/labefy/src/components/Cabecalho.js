import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

//Estilização //
const StyledHeader = styled.header`
  display: flex;
  font-family: trispace, sans-serif;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 10px 30px 0 10px;
    :hover {
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
  ul {
    position: absolute;
    top: 7%;
    left: 25%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    font-size: 2em;
    letter-spacing: 5px;
    transition: 1s;
  }
  /*Efeito Fantasma*/
  li:hover {
    filter: blur(70px);
    opacity: 0;
  }
  li:nth-child(1) {
    animation-delay: 0.1s;
  }
  li:nth-child(2) {
    animation-delay: 0.2s;
  }
  li:nth-child(3) {
    animation-delay: 0.3s;
  }
  li:nth-child(4) {
    animation-delay: 0.4s;
  }
  li:nth-child(5) {
    animation-delay: 0.5s;
  }
`
export default class Cabecalho extends React.Component {
  render() {
    return (
      <StyledHeader>
        <img src={logo} />
        <ul>
          <li>L</li>
          <li>A</li>
          <li>B</li>
          <li>E</li>
          <li>F</li>
          <li>Y</li>
        </ul>
      </StyledHeader>
    )
  }
}
