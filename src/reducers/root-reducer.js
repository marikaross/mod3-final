import { combineReducers } from 'redux'
import typeReducer from './type-reducer'

const rootReducer = combineReducers({
  pokeTypes: typeReducer
})

export default rootReducer
