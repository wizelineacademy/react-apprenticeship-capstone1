import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import Card from '../../components/Card/Card.component';
import CardsContainer from '../../components/CardsContainer/CardContainer.component';
import useFetch from '../../utils/hooks/useFetch';

function HomePage() {
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);
  const [serchedValue, setSearchedValue] = useState('');
  const [serchedData, setSearchedData] = useState({});
  const history = useHistory();
  const { fetchData, response, isLoading } = useFetch();

  useEffect(() => {
    const getResponse = () => {
      try {
        if (isLoading) return <p>is loaaaadiiiing.....</p>;
        if (response && response.items) {
          setSearchedData(response.items);
        } else {
          setSearchedData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getResponse();
  }, [response, isLoading]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchedValue(value);
    if (event.key === 'Enter') {
      await fetchData(serchedValue, 50);
    }
  };

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  const handleDetails = (id) => {
    history.push(`/details/${id}`);
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
        handleSearch={handleSearch}
        inputValue={serchedValue}
      />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage" ref={sectionRef}>
        {authenticated ? (
          <CardsContainer>
            {serchedData.map((item) => {
              const { title, thumbnails, description } = item.snippet;
              console.log('item', item);
              return (
                <Card
                  {...item}
                  key={item.id.videoId}
                  handleDetails={() => handleDetails(item.id.videoId)}
                  title={title}
                  videoImage={thumbnails.high.url}
                  subtitle={description}
                />
              );
            })}
          </CardsContainer>
        ) : (
          <Link to="/login">let me in →</Link>
        )}
      </section>
    </div>
  );
}

export default HomePage;
