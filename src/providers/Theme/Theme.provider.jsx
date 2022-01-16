import React, { useReducer, useContext, useEffect } from 'react';
import { themeStorage } from '@storages';

const INITIAL_THEME = {
  darkMode: false,
};
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_DARK_MODE':
        return {
          ...state,
          darkMode: action.value,
        };
    }
  }, themeStorage.get() || INITIAL_THEME);

  useEffect(() => {
    themeStorage.set(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
