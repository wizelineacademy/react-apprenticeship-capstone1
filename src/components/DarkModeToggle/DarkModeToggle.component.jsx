import React, { useContext } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-context';
import {
  DarkModeBall,
  DarkModeLabel,
  DarkModeInput,
  DarkModeText,
  ToggleContainer,
} from './DarkModeToggle.styled';

const DarkModeToggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClickHandler = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE' });
    } else {
      theme.dispatch({ type: 'DARKMODE' });
    }
  };

  return (
    <React.Fragment>
      <ToggleContainer onClick={onClickHandler}>
        <DarkModeInput type="checkbox" id="darkmode" />
        <DarkModeLabel htmlFor="darkmode">
          <DarkModeBall />
        </DarkModeLabel>
      </ToggleContainer>
      <DarkModeText>{darkMode ? 'Go light' : 'Go dark'}</DarkModeText>
    </React.Fragment>
  );
};

export default DarkModeToggle;
