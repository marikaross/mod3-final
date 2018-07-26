import React, { Component } from 'react';
import './App.css';
import PokemonContainer from '../../containers/PokemonContainer/PokemonContainer.js'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <div>
          <PokemonContainer className='PokemonContainer'/>
        </div>
      </div>
    );
  }
}


export default App;


