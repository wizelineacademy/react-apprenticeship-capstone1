import React, { useRef, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import CardsContainer from '../../components/CardsContainer/CardContainer.component';
import Card from '../../components/Card/Card.component';
import { Context } from '../../context';
import useFavorites from '../../utils/hooks/useFavorites';
import { FavoriteButton, FavoriteContainer } from './Favorites.styles';

function FavoritesPage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  const [sidebarState, setSidebarState] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { favorites } = state;
  const history = useHistory();
  const { deleteFavorites } = useFavorites();

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };
  const handleDetails = (id, item) => {
    dispatch({
      type: 'SAVE_SELECTED_VIDEO',
      payload: {
        ...state,
        selectedVideo: {
          ...item,
          favorited: false,
        },
      },
    });
    history.push(`/details/${id}`);
  };
  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Suetube videos"
        handleMenu={handleOpenMenu}
        authenticated={authenticated}
      />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage" ref={sectionRef}>
        {authenticated ? (
          <CardsContainer>
            {favorites.map((item) => {
              const { title, thumbnails, description } = item.snippet;
              return (
                <FavoriteContainer key={item.id.videoId}>
                  <Card
                    handleDetails={() => handleDetails(item.id.videoId, item)}
                    title={title}
                    videoImage={thumbnails.high.url}
                    subtitle={description}
                  />
                  <FavoriteButton
                    onClick={() => deleteFavorites(item.id.videoId)}
                  >
                    Remove from favorites
                  </FavoriteButton>
                </FavoriteContainer>
              );
            })}
          </CardsContainer>
        ) : (
          <Link to="/login">log to save favorites videos</Link>
        )}
      </section>
    </div>
  );
}

export default FavoritesPage;
