import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import styled, { css } from 'styled-components';
import videos from '../../mockvideos/youtube-mock-videos.json';

// import AuthProvider from '../../providers/Auth';
// import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
// import NotFound from '../../pages/NotFound';
// import Private from '../Private';
// import Fortune from '../Fortune';
// import Layout from '../Layout';
// import { random } from '../../utils/fns';
import MainHeader from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';
import VideoCard from '../VideoCard';

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;

function App() {
  const videosArray = videos.items;
  console.log(videosArray[0].id);
=======

import videos from '../../mockvideos/youtube-mock-videos.json';

import MainHeader from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';
>>>>>>> e81060cd1a13e86d847da4358d180a11b5f231fb

function App() {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <MainHeader></MainHeader>
      <MainContainer>
        <Heading title="Welcome to the challenge!"></Heading>
        <VideosContainer>
          {videosArray.map((video) => {
            return (
              <VideoCard
                imgsrc={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                description={video.snippet.description}
                key={video.id.videoId}
              />
            );
          })}
        </VideosContainer>
=======
      <MainHeader />
      <MainContainer>
        <Heading title="Welcome to the challenge" />
        <VideosContainer videos={videos} />
>>>>>>> e81060cd1a13e86d847da4358d180a11b5f231fb
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
