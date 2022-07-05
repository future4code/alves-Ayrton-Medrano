import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
  const [pokemon, setPokemon] = useState({})
  // Passo 4c
  useEffect(() => {
    pegaPokemon(props.pokeName)
  }, [props.pokeName])

  // Passo 4c

  useEffect(() => {
    if (pokemon !== pokemon) {
      pegaPokemon(props.pokeName)
    }
  }, [props.pokeName])

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(res => {
        setPokemon(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <figure>
      {console.log(pokemon)}
      {/* Passo 4d */}
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      {/* Passo 4d */}
      <p>Peso: {pokemon.weight}</p>
      {/* Passo 4d */}
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {/* Passo 4d */}
      {true && <img src={pokemon.sprites.front_default} alt={pokemon.name} />}
    </figure>
  )
}

export default PokeCard
