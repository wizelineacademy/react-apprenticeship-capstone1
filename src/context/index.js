import React, { useReducer, createContext } from 'react';
import { initialData, video } from '../utils/mocks';

const initialState = {
  favorites: [],
  relatedVideos: initialData,
  response: initialData,
  selectedVideo: video,
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ALL_DATA':
      return { ...state, ...action.payload };
    case 'SAVE_SELECTED_VIDEO':
      return { ...state, ...action.payload };
    case 'SAVE_RECOMENDED_VIDEO':
      return { ...state, ...action.payload };
    case 'SAVE_FAVORITES':
      return { ...state, ...action.payload };
    case 'REMOVE_FAVORITES':
      return { ...state, ...action.payload };
    default:
      throw new Error('Sutube is broken');
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
