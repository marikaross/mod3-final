import React from 'react';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
import { PokeDetails } from '../../components/App/PokeDetails.js'


export const PokemonTypeCards = (props) => {

  const handleClick = async () => {
    const pokeGuys = await findPokemon()
    props.addPokemon(pokeGuys)
  }


  const findPokemon = () => {
    const pokemonPromises = props.pokemon.map(async num => {
      const response = await fetch(`http://localhost:3001/pokemon/${num}`)
      const pokeInfo = await response.json()
      return pokeInfo  
    });
    return Promise.all(pokemonPromises)
  }


if (!props.pokemonState.length) {
  return (
    <div key={props.id} onClick={handleClick}>
      <h2>{props.name}</h2>
    </div>
    )
  } 
  const pokeDeets = props.pokemonState.map(pokemon => {
      return <PokeDetails {...pokemon}/>
    })
  return (pokeDeets)
  }


  

export const mapStateToProps = (state) => ({
  pokeTypes: state.pokeTypes,
  pokemonState: state.pokemonState
})

export const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTypeCards)