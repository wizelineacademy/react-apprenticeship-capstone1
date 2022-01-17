import React, { useReducer, useContext } from 'react';

const INITIAL_SEARCH = {
  searchTerm: 'Wizeline',
};
const SearchContext = React.createContext();

function SearchProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.value,
        };
    }
  }, INITIAL_SEARCH);

  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearch };
