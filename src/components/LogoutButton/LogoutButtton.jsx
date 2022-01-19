import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaSignOutAlt } from 'react-icons/fa';
import { StyledLogoutButton } from '../LoginButton/LoginButton.styled';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <StyledLogoutButton>
      <FaSignOutAlt
        onClick={() => logout({ returnTo: window.location.origin })}
      />
    </StyledLogoutButton>
  );
}

export default LogoutButton;
