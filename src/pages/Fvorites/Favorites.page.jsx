import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Layout from '../../components/Layout/Layout.component';
import { useAuth } from '../../providers/Auth';
import Card from '../../components/Card/Card.component';
import { Context } from '../../context';
import useFavorites from '../../utils/hooks/useFavorites';
import {
  FavoriteButton,
  FavoriteContainer,
  Container,
  ContainerText,
} from './Favorites.styles';
import SearchDashboard from '../../components/SearchDashboard/SearchDashboard.component';

function FavoritesPage() {
  const { authenticated } = useAuth();
  const { state, dispatch } = useContext(Context);
  const { favorites, response } = state;
  const history = useHistory();
  const { deleteFavorites } = useFavorites();
  const { search } = history.location;

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
    <Layout>
      <div style={{ position: 'relative' }}>
        {search === '?name=newSearch' ? (
          <SearchDashboard serchedData={response ? response.items : []} />
        ) : (
          <Container>
            {authenticated ? (
              <>
                {favorites.map((item) => {
                  const { title, thumbnails, description } = item.snippet;
                  return (
                    <FavoriteContainer key={item.id.videoId}>
                      <Card
                        handleDetails={() =>
                          handleDetails(item.id.videoId, item)
                        }
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
              </>
            ) : (
              <ContainerText>
                <div>
                  <p>Log in and save favorites videos</p>
                  <Link to="/">click here to back home</Link>
                </div>
              </ContainerText>
            )}
          </Container>
        )}
      </div>
    </Layout>
  );
}

export default FavoritesPage;
