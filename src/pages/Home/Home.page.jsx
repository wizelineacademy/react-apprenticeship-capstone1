import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import Card from '../../components/Card/Card.component';
import CardsContainer from '../../components/CardsContainer/CardContainer.component';

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
    history.push('/login');
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
        {authenticated ? (
          <CardsContainer>
            <Card
              title="title video here"
              subtitle="here we will see the main information about the video"
            />
             <Card
              title="title video here"
              subtitle="here we will see the main information about the video"
            />
             <Card
              title="title video here"
              subtitle="here we will see the main information about the video"
            />
             <Card
              title="title video here"
              subtitle="here we will see the main information about the video"
            />
             <Card
              title="title video here"
              subtitle="here we will see the main information about the video"
            />
             <Card
              title="title video here"
              subtitle="here we will see the main information about the video"
            />
          </CardsContainer>
        ) : (
          <Link to="/login">let me in →</Link>
        )}
      </section>
    </div>
  );
}

export default HomePage;
