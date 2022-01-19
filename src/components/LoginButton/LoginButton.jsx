import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaSignInAlt } from 'react-icons/fa';
import { StyledLoginButton } from './LoginButton.styled';

function LoginButton() {
  const { loginWithRedirect, user } = useAuth0();

  console.log(user);
  return (
    <StyledLoginButton>
      <FaSignInAlt onClick={() => loginWithRedirect()} />
    </StyledLoginButton>
  );
}

export default LoginButton;
