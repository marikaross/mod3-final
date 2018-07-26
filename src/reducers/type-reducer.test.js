import typeReducer from './type-reducer';

describe('typeReducer', () => {
  it('should return the initial state', () =>  {
    const expected = []
    const result = typeReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with new pokemon types', () => {
    const mockPokeType = {id: 4}
    const expected = mockPokeType
    const result = typeReducer(mockPokeType, 'ADD_TYPES')
    expect(result).toEqual(expected)
  })
})