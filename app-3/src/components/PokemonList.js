import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PokemonList = props => {
    const [pokemon, setPokemonName] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(mon => {
            setPokemonName(mon.data.results)
        })
    }, [])

    return (
        <div>
            {pokemon.map((mon, index) => {
                return (
                    <Link key={mon.url} to={`/pokemon/${mon.name}`}>
                        <h1>{mon.name}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default PokemonList