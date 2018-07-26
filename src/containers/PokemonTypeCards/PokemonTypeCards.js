import React from 'react';
import { connect } from 'react-redux';


export const PokemonTypeCards = (props) => {

  const findPokemon = () => {
    const pokemonUrls = props.pokemon.map(async num => {
      fetch(`http://localhost:3001/pokemon/${num}`)
      const response = await Promise.all(pokemonUrls)
      const pokemonInfo = await response.json()
      this.cleanPokemon(pokemonInfo)
    });
  }

  const cleanPokemon = (info) => {
    const cleanPokes = info.map(pokedude => {
      return {
        name: pokeDude.name,
        type: pokedude.type,
        weight: pokeDude.weight,
        image: pokeDude.sprites.front_default
      }
    })
  }

  return (
    <div key={props.id} onClick={findPokemon}>
      <h2>{props.name}</h2>
    </div>
    )
}

export const mapStateToProps = (state) => ({
  pokeTypes: state.pokeTypes,
  pokemon: state.pokemon

})

export const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon, id) => dispatch(addpokemon(pokemon, id))
})

export default connect(mapStateToProps)(PokemonTypeCards)