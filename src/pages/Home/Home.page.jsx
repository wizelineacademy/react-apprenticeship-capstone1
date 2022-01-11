import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);
  const history = useHistory();

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Suetube videos"
        handleMenu={handleOpenMenu}
        authenticated={authenticated}
        deAuthenticate={deAuthenticate}
      />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage" ref={sectionRef}>
        {authenticated ? <div>hola</div> : <Link to="/login">let me in →</Link>}
      </section>
    </div>
  );
}

export default HomePage;
