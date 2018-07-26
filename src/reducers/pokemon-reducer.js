const state = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9:[]}

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      const rightId = [...action.id, ...action.pokemon]
      return rightId
    default:
    return state;
  }
};

export default pokemonReducer;