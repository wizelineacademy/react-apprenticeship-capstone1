import React, { useReducer, createContext } from 'react';

const initialState = {};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ALL_DATA':
      return { ...state, ...action.payload };
    case 'SAVE_SELECTED_VIDEO':
      return { ...state, ...action.payload };
    default:
      throw new Error('internet is broken');
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
