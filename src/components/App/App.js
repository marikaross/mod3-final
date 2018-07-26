import React, { Component } from 'react';
import './App.css';
import PokemonContainer from '../../containers/PokemonContainer/PokemonContainer.js'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokemonContainer className='PokemonContainer'/>
      </div>
    );
  }
}


export default App;


