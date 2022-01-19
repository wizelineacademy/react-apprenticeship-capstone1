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
          'https://content.googleapis.com/youtube/v3/search?part=snippet&q=react&key=AIzaSyBuaBEPAdATLau7mysPe-Nms-hLCo8Ufis'
        }
      />
    </StyledHome>
  );
}

export default HomePage;
