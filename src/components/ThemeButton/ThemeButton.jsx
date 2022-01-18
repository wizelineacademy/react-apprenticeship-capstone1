import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

import { StyledButton } from './ThemeButton.styled';

function Button(props) {
  const { setToggleTheme } = useContext(AppContext);
  return (
    <StyledButton
      data-testid="button"
      onClick={() => {
        setToggleTheme();
      }}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;
