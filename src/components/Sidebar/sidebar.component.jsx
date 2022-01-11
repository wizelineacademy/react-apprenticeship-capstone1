import React from 'react';
import { useAuth } from '../../providers/Auth';
import { Link, useHistory } from 'react-router-dom';

import { SidebarContainer, SidebarList } from './sidebar.styles';
// import useLogOut from '../../utils/hooks/useLogout';

const Sidebar = () => {
  //   const { deAuthenticate } = useLogOut();
  const history = useHistory();
  const { logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/login');
  };
  return (
    <>
      <SidebarContainer>
        <SidebarList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/login" onClick={deAuthenticate}>
              log out
            </Link>
          </li>
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
