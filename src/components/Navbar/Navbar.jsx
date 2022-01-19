import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import Button from '../ThemeButton/ThemeButton';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButtton';
import { FaStar } from 'react-icons/fa';

import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <StyledNavbar>
      <div>
        <a href="/" data-testid="home-link">
          <h1>
            Wize<span>Tube</span>
          </h1>
        </a>
      </div>
      <div className="user-name">
        {isAuthenticated ? (
          <>
            <a href="/favorites">
              <FaStar />
            </a>
            <p>Hello, {user.name.split(' ')[0]}!</p>
          </>
        ) : (
          <p>Hello, Stranger!</p>
        )}
        <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
      </div>

      <Button></Button>
    </StyledNavbar>
  );
}

export default Navbar;
