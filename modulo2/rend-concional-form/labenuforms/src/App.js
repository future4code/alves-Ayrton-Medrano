import React from 'react'
import './App.css'
import Inputs from './components/Inputs'
import SegundaTela from './components/SegundaTela'

export default class App extends React.Component {
  state = {
    tela: 'inicio'
  }

  render() {
    return <>{this.state.tela === 'inicio' ? <Inputs /> : <SegundaTela />}</>
  }
}
