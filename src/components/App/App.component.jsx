import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import videos from '../../mockvideos/youtube-mock-videos.json';

import MainHeader from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <MainContainer>
        <Heading title="Welcome to the challenge" />
        <VideosContainer videos={videos} />
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
