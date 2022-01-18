import React, { useReducer, useContext, useEffect } from 'react';
import { favoritesStorage } from '@storages';

const INITIAL_FAVORITES = [];
const FavoritesContext = React.createContext();

function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer((favorites, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        // If it is already in favorites
        if (favorites.find((item) => item[1].id === action.value.id))
          return favorites;
        return favorites.concat([[action.value.id, action.value]]);

      case 'REMOVE_FAVORITE':
        return favorites.filter((item) => item[1].id !== action.value.id);

      default:
        return favorites;
    }
  }, favoritesStorage.get() || INITIAL_FAVORITES);

  useEffect(() => {
    favoritesStorage.set(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={[favorites, dispatch]}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };
