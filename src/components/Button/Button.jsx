import React from 'react';
import { StyledButton } from './Button.styled';

function button(props) {
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <StyledButton data-testid="button" onClick={handleClick}>
      {props.text}
    </StyledButton>
  );
}

export default button;
