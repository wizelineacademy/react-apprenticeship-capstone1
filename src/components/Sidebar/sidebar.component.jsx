import React from 'react';
import { useAuth } from '../../providers/Auth';
import { Link, useHistory } from 'react-router-dom';

import { SidebarContainer, SidebarList } from './sidebar.styles';

const Sidebar = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  return (
    <>
      <SidebarContainer>
        <SidebarList>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/" onClick={deAuthenticate}>
              log out
            </Link>
          </li>
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
