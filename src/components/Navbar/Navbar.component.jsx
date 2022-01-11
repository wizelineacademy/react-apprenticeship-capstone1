import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import Button from '../Button/Button.component';

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <img src="../../hamburger.svg" alt="menu" />
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <h1>
          Wize<span>Tube</span>
        </h1>
      </div>
      <div>
        <Button>Dark Theme</Button>
        <img src="../../profile.svg" alt="profile img" />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
