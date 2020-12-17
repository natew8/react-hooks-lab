import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pokemon from './components/Pokemon'
import PokemonList from './components/PokemonList'

export default (
    <Switch>
        <Route exact path='/' component={PokemonList} />
        <Route path='/pokemon/:name' component={Pokemon} />
    </Switch>
)