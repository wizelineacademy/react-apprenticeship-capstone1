// import React from 'react';

// import './Layout.styles.css';

// function Layout({ children }) {
//   return <main className="container">{children}</main>;
// }

// export default Layout;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../Header/Header.component';
import Sidebar from '../Sidebar/sidebar.component';
import useSearch from '../../utils/hooks/useSearch';

import './Layout.styles.css';

function Layout({ children }) {
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);
  const { handleSearch, serchedValue } = useSearch();

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/login');
  };

  return (
    <>
      <Header
        title="Suetube videos"
        handleMenu={handleOpenMenu}
        authenticated={authenticated}
        deAuthenticate={deAuthenticate}
        handleSearch={handleSearch}
        inputValue={serchedValue}
      />
      {sidebarState ? <Sidebar /> : null}
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
