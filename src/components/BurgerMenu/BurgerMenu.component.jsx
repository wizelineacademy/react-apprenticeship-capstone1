import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BurgerContainer, BurgerLine } from './BurgerMenu.styled';

const BurgerMenu = () => {
  return (
    <BurgerContainer data-testid="burger-menu-container">
      <BurgerLine data-testid="burger-line" />
      <BurgerLine data-testid="burger-line" />
      <BurgerLine data-testid="burger-line" />
    </BurgerContainer>
  );
};

export default BurgerMenu;
