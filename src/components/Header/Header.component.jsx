import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './header.styles';
import SeachBar from '../SearchBar/SearchBar.component';
import { MunuButton } from '../Sidebar/sidebar.styles';

import { ReactSVG } from 'react-svg';

const Header = ({ title, handleMenu, deAuthenticate, authenticated }) => {
  return (
    <Container>
      <MunuButton onClick={handleMenu}>
        <ReactSVG src="./images/menu-pink.svg" />
      </MunuButton>
      <Title>{title}</Title>
      <SeachBar placeholder="Search a video" />
      {authenticated ? (
        <Link to="/login" onClick={deAuthenticate}>
          log out
        </Link>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </Container>
  );
};

export default Header;
