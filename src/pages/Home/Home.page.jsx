import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import Card from '../../components/Card/Card.component';
import CardsContainer from '../../components/CardsContainer/CardContainer.component';
import useFetch from '../../utils/hooks/useFetch';
import { Context } from '../../context';

function HomePage() {
  const initialData = {
    etag: '',
    items: [
      {
        id: {
          kind: '',
          videoId: '',
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            high: {
              url: '',
            },
          },
        },
      },
    ],
  };
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);
  const [serchedValue, setSearchedValue] = useState('');
  const [serchedData, setSearchedData] = useState(initialData.items);
  const history = useHistory();
  const { fetchData, response, isLoading } = useFetch();
  const { state, dispatch } = useContext(Context);
  let controller = new AbortController();

  const handleReponse = (responseStatus) => {
    try {
      if (responseStatus === 'updating') {
        if (response && response.items) {
          setSearchedData(response.items);
          dispatch({
            type: 'SAVE_ALL_DATA',
            payload: {
              ...state,
              response,
              serchedValue,
            },
          });
        } else {
          setSearchedData([]);
        }
      }
      if (responseStatus === 'firstLoad') {
        //TODO: Change when deploy to not loose request.
        //fetchData('', 15);
        console.log('here will get some random videos');
        if (response && response.items) setSearchedData(response.items);
        else {
          setSearchedData([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleReponse('firstLoad');
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    handleReponse('updating');
    return () => {
      controller.abort();
    };
  }, [response]);

  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchedValue(value);
    if (event.key === 'Enter') {
      fetchData(serchedValue, 50);
    }
  };

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  const handleDetails = (id, item) => {
    dispatch({
      type: 'SAVE_SELECTED_VIDEO',
      payload: {
        ...state,
        selectedVideo: item,
      },
    });
    history.push(`/details/${id}`);
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/login');
  };

  if (isLoading) return <p>Loading...</p>; //TODO: put this at component level

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
              return (
                <Card
                  {...item}
                  key={item.id.videoId}
                  handleDetails={() => handleDetails(item.id.videoId, item)}
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
