import * as actions from './index.js';

describe('addType', () => {
  it('should have a type of ADD_TYPE', () => {
    const types = [{}, {}]
    const expected = {
      type: 'ADD_TYPES',
      types: [{}, {}]
    }

    const result = actions.addTypes(types)
    expect(result).toEqual(expected)
  })

})

describe('addPokemon', () => {
  it('should have a type of ADD-POKEMON', () => {
    const pokemon = [{}, {}]
    const id = 6
    const expected = {
      type: 'ADD_POKEMON',
      pokemon: [{},{}],
      id: 6
    }
    const result = actions.addPokemon(pokemon, id)
    expect(result).toEqual(expected)
  })
})