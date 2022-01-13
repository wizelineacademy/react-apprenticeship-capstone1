import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContainerStyled } from './MainContainer.styled';

const MainContainer = (props) => {
  return (
    <MainContainerStyled data-testid="main-container-component">
      {props.children}
    </MainContainerStyled>
  );
};

export default MainContainer;
