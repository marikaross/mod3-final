import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions';


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
        <button onClick={()=> {
          this.props.addPokemon()
        }}> Catch'em All </button>
      </div>
    );
  }
}




PokemonContainer.propTypes = {
  fake: shape({ fake: string }),
  addPokemon: func.isRequired
};

const mapStateToProps = (state) => ({ 
  pokemon: state.pokemon });

const mapDispatchToProps = dispatch => ({ addPokemon:
  (pokemon) => dispatch(addPokemon(pokemon))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
