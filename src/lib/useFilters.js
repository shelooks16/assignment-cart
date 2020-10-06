import { useReducer } from 'react';

const createFilterReducer = initialState => (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;

    case 'SET': {
      return { ...state, [action.filterName]: action.value };
    }

    default:
      return state;
  }
};

export const useFilters = initialState => {
  const filterReducer = createFilterReducer(initialState);
  return useReducer(filterReducer, initialState);
};
