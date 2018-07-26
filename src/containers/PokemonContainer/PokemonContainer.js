import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTypes } from '../../actions';
import image from '../../loading.gif';
import { PokemonTypeCards } from '../PokemonTypeCards/PokemonTypeCards.js'


export class PokemonContainer extends Component {

  componentDidMount() {
    this.fetchTypes()
  }

  fetchTypes = async () => {
    try {
      const response = await fetch('http://localhost:3001/types')
      const types = await response.json()
      this.props.addTypes(types)
    } catch (error) {
      throw (error.message)
    }
  }
  


  render() {
    if (!this.props.pokeTypes.length) {
      return <img src={image} alt='loading...' />
    }
    const pokemonTypeCards = this.props.pokeTypes.map(type => {
      return <PokemonTypeCards {...type} key={type.id}/>
    })
    return (
      (pokemonTypeCards)
    );
  }
}




PokemonContainer.propTypes = {
  addTypes: func.isRequired
};

export const mapStateToProps = (state) => ({ 
  pokeTypes: state.pokeTypes });

export const mapDispatchToProps = dispatch => ({ 
  addTypes: (types) => dispatch(addTypes(types))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
