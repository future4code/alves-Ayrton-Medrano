import React from 'react'
import styled from 'styled-components'
import Produtos from './Components/Produtos.js'
// Importação de imagens//
import Camiseta1 from './img/feminina-astronauta.png'
import Camiseta2 from './img/feminina-desenhos.png'
import Camiseta3 from './img/feminina-galaxia.png'
import Camiseta4 from './img/feminina-macaco.png'
import Camiseta5 from './img/feminina-mafalda.png'
import Camiseta6 from './img/feminina-nasa.png'
import Camiseta7 from './img/feminina-sistemasolar.png'
import Camiseta8 from './img/feminina-sistemasolar2.png'
import Camiseta9 from './img/masculina-alomarciano.png'
import Camiseta10 from './img/masculina-astronautabalao.png'
import Camiseta11 from './img/masculina-nasa-branca.png'
import Camiseta12 from './img/masculina-nasa.png'
import Camiseta13 from './img/masculina-personagens.png'
import Camiseta14 from './img/masculina-startreck.png'
import Camiseta15 from './img/masculina-starwars.png'

//Estilização//
const Container = styled.div`
  background-position: 50% 0;
  display: flex;
  width: 100%;
  height: 50vh;
  background-color: white;
  margin-bottom: -50vw;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #fff;
  font-size: 18px;
`

const Select = styled.select`
  height: 70%;
  margin-top: 2vh;
  margin-right: 2vh;
  font-size: 18px;
`

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 2fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  justify-items: center;
  align-items: center;
  background-color: #ffff;
  color: black;
`

const Produto = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
`

const AreaProdutos = styled.div`
  background-color: white;
  height: 400px;
  width: 250px;
  margin-bottom: 50px;
  transition: 0.3s;
  box-shadow: 2px 2px 5px darkgray;
  text-align: center;
`

const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: 6.5vw;
  /* width: 30vw;
  height: 18vw; */
`

const Quantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Botao = styled.button`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  background-color: black;
  &:hover {
    background-color: #9999;
    color: black;
    cursor: pointer;
  }
`

const CarrinhoCompras = styled.div`
  margin: 1vw;
  margin-top: 10.4vw;
  padding-left: 2vw;
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 25vw;
  background-color: white;
`

const Rodape = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  position: absolute;
  margin-bottom: -688px;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  padding: 0px;
`
//Estilização Final
const produtos = [
  {
    id: 1,
    name: 'Astronauta',
    value: 60.0,
    imageUrl: Camiseta1
  },

  {
    id: 2,
    name: 'Desenhos',
    value: 55.0,
    imageUrl: Camiseta2
  },

  {
    id: 3,
    name: 'Galaxia',
    value: 70.0,
    imageUrl: Camiseta3
  },

  {
    id: 4,
    name: 'Macaco',
    value: 60.0,
    imageUrl: Camiseta4
  },

  {
    id: 5,
    name: 'Mafalda',
    value: 55.0,
    imageUrl: Camiseta5
  },

  {
    id: 6,
    name: 'Nasa-fem',
    value: 80.0,
    imageUrl: Camiseta6
  },

  {
    id: 7,
    name: 'SistSolar',
    value: 50.0,
    imageUrl: Camiseta7
  },

  {
    id: 8,
    name: 'SistSolar2',
    value: 60.0,
    imageUrl: Camiseta8
  },
  {
    id: 9,
    name: 'Marciano',
    value: 80.0,
    imageUrl: Camiseta9
  },
  {
    id: 10,
    name: 'Astronauta',
    value: 75.0,
    imageUrl: Camiseta10
  },
  {
    id: 11,
    name: 'Nasa-Branca',
    value: 85.0,
    imageUrl: Camiseta11
  },
  {
    id: 12,
    name: 'Nasa-Preta',
    value: 85.0,
    imageUrl: Camiseta12
  },
  {
    id: 13,
    name: 'Personagens',
    value: 70.0,
    imageUrl: Camiseta13
  },
  {
    id: 14,
    name: 'Startreck',
    value: 85.0,
    imageUrl: Camiseta14
  },
  {
    id: 15,
    name: 'Starwars',
    value: 90,
    imageUrl: Camiseta15
  }
]
class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <header>Header Aqui</header>
        <p>
          Filtros <br />
          Valor min
          <br /> Valor Max
        </p>

        <h2>Carrinho</h2>

        <p>Total: </p>
        <Produtos />
        <p class="text">O footer chegou </p>
      </div>
    )
  }
}

export default App
