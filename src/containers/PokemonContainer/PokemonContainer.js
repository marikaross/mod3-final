import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
import image from '../../loading.gif'


class PokemonContainer extends Component {

  componentDidMount() {
    console.log('hi')
    this.fetchPokemon()
  }

  fetchPokemon = async () => {
    try {
      const response = await fetch('http://localhost:3001/types')
      const pokemon = await response.json()
      await this.props.addPokemon(pokemon)
    } catch (error) {

    }
  }

  render() {
    return (
      <div>
    
      </div>
    );
  }
}




PokemonContainer.propTypes = {
  addPokemon: func.isRequired
};

const mapStateToProps = (state) => ({ 
  pokemon: state.pokemon });

const mapDispatchToProps = dispatch => ({ addPokemon:
  (pokemon) => dispatch(addPokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
