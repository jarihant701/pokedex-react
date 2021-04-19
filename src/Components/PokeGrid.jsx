import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const PokeGrid = ({pokemons}) => {
  return (
    <div className="pokemon-grid">
            {/* <Route path="/"/> */}
            {pokemons.map((pokemon) => {
              return (
                <Link to={`/${pokemon.name}`} key={pokemon.number} className="Link">
                  <Card
                    key={pokemon.number}
                    imgSrc={pokemon.imgSrc}
                    name={pokemon.name}
                    number={pokemon.number}
                    types={pokemon.types}
                  />
                </Link>
              );
            })}
          </div>
  )
}


export default PokeGrid