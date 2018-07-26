import React from 'react';
import { connect } from 'react-redux';


export const PokemonTypeCards = (props) => {

  const findPokemon = () => {
    const pokemonUrls = props.pokemon.map( async num => {
      fetch(`http://localhost:3001/pokemon/${num}`)
      const response = await Promise.all(pokemonUrls)
      const pokemonInfo = await response.json()
      console.log(pokemonInfo)
    });
      

  }

  return (
    <div key={props.id} onClick={findPokemon}>
      <h2>{props.name}</h2>
    </div>
    )
}

export const mapStateToProps = (state) => ({
  pokeTypes: state.pokeTypes
})

export default connect(mapStateToProps)(PokemonTypeCards)