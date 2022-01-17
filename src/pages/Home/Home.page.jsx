import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import SearchDashboard from '../../components/SearchDashboard/SearchDashboard.component';

import useSearch from '../../utils/hooks/useSearch';
import useFetch from '../../utils/hooks/useFetch';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);
  const history = useHistory();
  const { isLoading } = useFetch();
  const { handleSearch, serchedData, serchedValue } = useSearch();

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };
  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/login');
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Suetube videos"
        handleMenu={handleOpenMenu}
        authenticated={authenticated}
        deAuthenticate={deAuthenticate}
        handleSearch={handleSearch}
        inputValue={serchedValue}
      />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage" ref={sectionRef}>
        <SearchDashboard serchedData={serchedData} />
      </section>
    </div>
  );
}

export default HomePage;
