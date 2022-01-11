import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Header title="Suetube videos" handleMenu={handleOpenMenu} />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage" ref={sectionRef}>
        {authenticated ? <div>hola</div> : <Link to="/login">let me in →</Link>}
      </section>
    </div>
  );
}

export default HomePage;
