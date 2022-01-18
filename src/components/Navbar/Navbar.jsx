import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import Button from '../ThemeButton/ThemeButton';

function Navbar() {
  return (
    <StyledNavbar>
      <a href={'/'} data-testid="menu-link">
        <div>
          <img src="../../hamburger.svg" alt="menu" />
        </div>
      </a>
      <div>
        <h1>
          Wize<span>Tube</span>
        </h1>
      </div>
      <div>
        <Button text="Dark Mode"></Button>
        <img src="../../profile.svg" alt="profile img" />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
