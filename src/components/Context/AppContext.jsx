import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  favoritesList: [],
  detailVideo: [],
  toggleTheme: false,
};

export const AppContext = createContext(initialState);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getVideosList = (list) => {
    dispatch({ type: 'FETCH_VIDEOS_SUCCESS', payload: list });
  };
  const addVideoToFavorite = (video) => {
    dispatch({ type: 'ADD_VIDEO_TO_FAVORITESLIST', payload: video });
  };
  const getVideoDetails = (video) => {
    dispatch({ type: 'GET_VIDEO_DETAILS', payload: video });
  };

  const setToggleTheme = () => {
    dispatch({ type: 'TOGGLE_WEB_THEME' });
  };

  return (
    <AppContext.Provider
      value={{
        detailVideo: state.detailVideo,
        favoritesList: state.favoritesList,
        toggleTheme: state.toggleTheme,
        getVideosList,
        addVideoToFavorite,
        getVideoDetails,
        setToggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};