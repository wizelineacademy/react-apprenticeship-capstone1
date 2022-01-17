import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styled';
import Button from '../Button/Button';

function Navbar() {
  return (
    <StyledNavbar>
      <Link to={'/'}>
        <div>
          <img src="../../hamburger.svg" alt="menu" />
        </div>
      </Link>
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
