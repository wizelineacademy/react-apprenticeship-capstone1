import React from 'react';
import { Container, Title } from './header.styles';
import SeachBar from '../SearchBar/SearchBar.component';
import { MunuButton } from '../Sidebar/sidebar.styles';

import { ReactSVG } from 'react-svg';

const Header = ({ title, handleMenu }) => (
  <Container>
    <MunuButton onClick={handleMenu}>
      <ReactSVG src="./images/menu-pink.svg" />
    </MunuButton>
    <Title>{title}</Title>
    <SeachBar placeholder="Search a video" />
  </Container>
);

export default Header;
