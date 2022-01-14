import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import {MOCK_CREDENTIALS, USER_DEFAULT_PROPS} from '../utils/const'
function AppState(props) {
  const initialState = {
    searchTerm: '',
    videos: [],
    styles: {
      customCard: { backgroundColor: '#fff', fontColor: '#000' },
      layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
    },
    isLogged: true,
    userProps: MOCK_CREDENTIALS
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const setVideos = (videos) => {
    dispatch({ payload: videos, type: 'UPDATE_VIDEOS' });
  };

  const setSearchTerm = (newValue) => {
    dispatch({ payload: newValue, type: 'UPDATE_SEARCH_TERM' });
  };

  const toggleStyles = (value) => {
    let styles = {
      customCard: { backgroundColor: '#1C1C1C', fontColor: '#B9B8B8' },
      layout: { backgroundColor: '#1C1C1C', fontColor: '#000000' },
    };

    let newStyles = value ? styles : initialState.styles;

    dispatch({ payload: value, type: 'UPDATE_UI_MODE', styles: newStyles });
  };

  const setSession = (user) =>{
    dispatch({ payload: user, type: 'USER_LOGIN'});
  }

  const logout = ()=>{
    dispatch({ payload: USER_DEFAULT_PROPS, type: 'USER_LOGOUT'});
  }

  return (
    <appContext.Provider
      value={{
        videos: state.videos,
        searchTerm: state.searchTerm,
        styles: state.styles,
        isLogged:state.isLogged,
        userProps:state.userProps,
        setVideos,
        setSearchTerm,
        toggleStyles,
        setSession,
        logout
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;
