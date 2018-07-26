const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      const newState = [...state, ...action.pokemon]
      return newState
    default:
      return state;
  }
};

export default pokemonReducer;