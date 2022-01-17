import React, { useState, useContext } from 'react';
import SearchContext from '../../context/search-context';
import CurrentVideoContext from '../../context/current-video-context';
import { ThemeContext } from '../../context/theme-context';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globalStyles';
import { lightTheme, darkTheme } from '../../Themes';

import Header from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';
import VideoDetailsView from '../VideoDetailsView';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [searchQuery, setSearchQuery] = useState('wizeline');
  const value = { searchQuery, setSearchQuery };

  const [isActive, setIsActive] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    id: '',
    title: '',
    description: '',
    relatedVideos: [],
  });

  const videoValue = {
    isActive,
    setIsActive,
    videoDetails,
    setVideoDetails,
  };
  return (
    <ThemeProvider theme={darkMode === false ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <CurrentVideoContext.Provider value={videoValue}>
          <SearchContext.Provider value={value}>
            <Header />
            <MainContainer>
              {!isActive && <Heading title="Welcome to the challenge!" />}
              {!isActive && <VideosContainer />}
              {isActive && <VideoDetailsView />}
            </MainContainer>
          </SearchContext.Provider>
        </CurrentVideoContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
