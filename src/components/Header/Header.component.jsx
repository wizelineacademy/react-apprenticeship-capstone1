import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

import Searchbar from '../Searchbar';
import DarkModeToggle from '../DarkModeToggle';
import BurgerMenu from '../BurgerMenu';
import LoginAvatar from '../LoginAvatar';

const Header = () => {
  return (
    <HeaderStyled role="header">
      <BurgerMenu />
      <Searchbar />
      <DarkModeToggle />
      <LoginAvatar />
    </HeaderStyled>
  );
};

export default Header;
