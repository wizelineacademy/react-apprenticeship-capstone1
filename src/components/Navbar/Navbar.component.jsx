import React from 'react';
import { StyledNavbar } from '../Styles/Navbar.styled';
import Buttom from '../Buttom/Buttom.component';

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
        <Buttom>Dark Theme</Buttom>
        <img src="../../profile.svg" alt="profile img" />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
