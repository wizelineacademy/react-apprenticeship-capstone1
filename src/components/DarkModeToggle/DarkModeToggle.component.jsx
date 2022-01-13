import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  DarkModeBall,
  DarkModeLabel,
  DarkModeInput,
  DarkModeText,
  ToggleContainer,
} from './DarkModeToggle.styled';

const DarkModeToggle = () => {
  return (
    <React.Fragment>
      <ToggleContainer>
        <DarkModeInput type="checkbox" id="darkmode" />
        <DarkModeLabel htmlFor="darkmode">
          <DarkModeBall />
        </DarkModeLabel>
      </ToggleContainer>
      <DarkModeText>Dark mode</DarkModeText>
    </React.Fragment>
  );
};

export default DarkModeToggle;
