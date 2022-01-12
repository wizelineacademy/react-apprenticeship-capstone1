import React from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import Container from '../../components/Container/Container.component';
import { StyledHome } from './Home.styles';

function HomePage() {
  return (
    <StyledHome className="homepage">
      <Navbar />
      <Container />
    </StyledHome>
  );
}

export default HomePage;
