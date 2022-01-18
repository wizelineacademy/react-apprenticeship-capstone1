import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/VideosContainer/VideosContainer';
import { StyledHome } from './Home.styles';

function HomePage() {
  return (
    <StyledHome>
      <Navbar />
      <Container
        url={
          'https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyDwsRUO25ZI25bzx-K7L8QKsRG39bIBiDg'
        }
      />
    </StyledHome>
  );
}

export default HomePage;
