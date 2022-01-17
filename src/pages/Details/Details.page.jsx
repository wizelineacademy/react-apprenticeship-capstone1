import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import { Context } from '../../context';
import useFetch from '../../utils/hooks/useFetch';
import initialData from '../../utils/mocks';
import useSearch from '../../utils/hooks/useSearch';
import useFavorites from '../../utils/hooks/useFavorites';
import SearchDashboard from '../../components/SearchDashboard/SearchDashboard.component';

import {
  DetailsContainer,
  VideoContainer,
  Video,
  ListVideosContainer,
  Information,
  FavoriteButton,
  TitleContainer,
} from '../Details/Details.styles';
import RecomendedCard from '../../components/RecommendedCard/Recommendedcard.component';

const DetailsPage = () => {
  const { authenticated, logout } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  let controller = new AbortController();

  const [sidebarState, setSidebarState] = useState(false);
  const [searchInDetails, setSearchInDetails] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState(initialData);
  const { fetchData, response, isLoading, error } = useFetch();
  const [favorited, setFavorited] = useState(false);
  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    recomendedVideoSelected = { id: { videoId: '' } },
    favorites,
  } = state;

  const { handleSearch, serchedData, serchedValue } = useSearch();
  const { selectFavorites, deleteFavorites, isfavorited } = useFavorites();

  const handleRandomVideos = () => {
    setTimeout(() => {
      fetchData(state.serchedValue, 10, id);
    }, 2000);
  };
  useEffect(() => {
    let fav;
    if (id === selectedVideoFromState.id.videoId)
      fav = isfavorited(selectedVideoFromState);
    if (id === recomendedVideoSelected.id.videoId)
      fav = isfavorited(recomendedVideoSelected);
    setFavorited(fav);
  }, [favorites, isfavorited]);

  useEffect(() => {
    handleRandomVideos();
  }, []);

  useEffect(() => {
    if (serchedValue !== '') setSearchInDetails(true);
  }, [serchedValue]);

  useEffect(() => {
    try {
      if (response) {
        setRelatedVideos(response);
      } else {
        setRelatedVideos(initialData);
      }
    } catch (error) {
      console.log(error);
    }
    return () => {
      controller.abort();
    };
  }, [response]);

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  const handleRelatedVideo = (id, item) => {
    dispatch({
      type: 'SAVE_RECOMENDED_VIDEO',
      payload: {
        ...state,
        recomendedVideoSelected: {
          ...item,
          favorited: false,
        },
      },
    });
    history.push(`/details/${id}`);
  };

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/login');
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>No search found, try again please</p>;

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
      <section className="details">
        {searchInDetails ? (
          <SearchDashboard serchedData={serchedData} />
        ) : (
          <DetailsContainer>
            <VideoContainer>
              <Video>
                <iframe src={videoSrc} title="Video player" />
              </Video>
              <Information>
                {
                  <>
                    <TitleContainer>
                      <h3>
                        {recomendedVideoSelected.id.videoId === id
                          ? recomendedVideoSelected.snippet.title
                          : selectedVideoFromState.snippet.title}
                      </h3>
                      <FavoriteButton
                        onClick={() =>
                          favorited ? deleteFavorites(id) : selectFavorites(id)
                        }
                      >
                        <ReactSVG
                          src={
                            favorited ? '/favorite.svg' : '/favorite-empty.svg'
                          }
                        />
                        <p>{favorited ? 'Remove' : 'Add'} to Favorites</p>
                      </FavoriteButton>
                    </TitleContainer>
                    <p>
                      {recomendedVideoSelected.id.videoId === id
                        ? recomendedVideoSelected.snippet.description
                        : selectedVideoFromState.snippet.description}
                    </p>
                  </>
                }
              </Information>
            </VideoContainer>
            <ListVideosContainer>
              {relatedVideos.items.map((item) => (
                <RecomendedCard
                  handleRelatedVideo={() =>
                    handleRelatedVideo(item.id.videoId, item)
                  }
                  key={item.id.videoId}
                  title={item.snippet.title}
                  videoContent={item.snippet.thumbnails.high.url}
                  description={item.snippet.description}
                />
              ))}
              {selectedVideoFromState.id.videoId !== id ? (
                <RecomendedCard
                  handleRelatedVideo={() =>
                    handleRelatedVideo(
                      selectedVideoFromState.id.videoId,
                      selectedVideoFromState
                    )
                  }
                  key={selectedVideoFromState.id.videoId}
                  title={selectedVideoFromState.snippet.title}
                  videoContent={
                    selectedVideoFromState.snippet.thumbnails.high.url
                  }
                  description={selectedVideoFromState.snippet.description}
                />
              ) : null}
            </ListVideosContainer>
          </DetailsContainer>
        )}
      </section>
    </div>
  );
};

export default DetailsPage;