import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  favoritesList: [],
  detailVideo: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getVideosList = (list) => {
    dispatch({ type: 'FETCH_VIDEOS_SUCCESS', payload: list });
  };
  const addVideotoFavorite = (video) => {
    dispatch({ type: 'ADD_VIDEO_TO_FAVORITESLIST', payload: video });
  };
  const getVideoDetails = (video) => {
    dispatch({ type: 'GET_VIDEO_DETAILS', payload: video });
  };

  return (
    <AppContext.Provider
      value={{
        detailVideo: state.detailVideo,
        favoritesList: state.favoritesList,
        getVideosList,
        addVideotoFavorite,
        getVideoDetails,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
