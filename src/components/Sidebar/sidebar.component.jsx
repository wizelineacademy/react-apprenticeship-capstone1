import React, { useState } from 'react';
import { useAuth } from '../../providers/Auth';
import { Link, useHistory } from 'react-router-dom';

import { SidebarContainer, SidebarList } from './sidebar.styles';

const Sidebar = ({ open }) => {
  const history = useHistory();
  const { logout } = useAuth();
  const [menu, setMenu] = useState(open);

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/login');
  };
  const handleClick = () => {
    setMenu(!open);
    console.log('me quiero cerrar');
  };
  return (
    <>
      {menu ? (
        <SidebarContainer>
          <SidebarList>
            <li onClick={handleClick}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/login" onClick={deAuthenticate}>
                log out
              </Link>
            </li>
          </SidebarList>
        </SidebarContainer>
      ) : null}
    </>
  );
};

export default Sidebar;
