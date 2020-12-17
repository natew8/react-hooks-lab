import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Pokemon = props => {
    const { name } = props.match.params
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
            setPokemon(res.data)
        })
        document.title = `${pokemon.name}`
    }, [name])

    return (
        <div className='pokemon-container' >
            <h1>{pokemon.name}</h1>
            <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
            <Link to={'/'} className='back-arrow'><img src='https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png' className='back-arrow' alt='back' /></Link>
        </div>
    )
}
export default Pokemon