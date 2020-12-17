import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonList from './PokemonList'

const Hook = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
            setPokemon(res.data.results)
        })
    }, [])

    return (
        <div>
            {pokemon.map((mon, index) => {
                return <PokemonList name={mon.name} key={index} />
            })}
        </div>
    )
}

export default Hook
