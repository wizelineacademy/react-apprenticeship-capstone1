import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

import { StyledButton } from './ThemeButton.styled';

function Button() {
  const { toggleTheme, setToggleTheme } = useContext(AppContext);
  return (
    <StyledButton
      data-testid="button"
      onClick={() => {
        setToggleTheme();
      }}
    >
      {toggleTheme ? 'Ligth Mode' : 'Dark Mode'}
    </StyledButton>
  );
}

export default Button;
