import { combineReducers } from 'redux';
import typeReducer from './type-reducer';
import pokemonReducer from './pokemon-reducer'

const rootReducer = combineReducers({
  pokeTypes: typeReducer,
  pokemonState: pokemonReducer
})

export default rootReducer
