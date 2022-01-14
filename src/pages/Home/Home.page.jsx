import React from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import Container from '../../components/VideosContainer/VideosContainer';
import { StyledHome } from './Home.styles';

function HomePage() {
  return (
    <StyledHome>
      <Navbar />
      <Container />
    </StyledHome>
  );
}

export default HomePage;
