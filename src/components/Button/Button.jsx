import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

import { StyledButton } from './Button.styled';

function Button(props) {
  const { setToggleMode } = useContext(AppContext);

  return (
    <StyledButton
      data-testid="button"
      onClick={() => {
        setToggleMode();
      }}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;
