import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import { Context } from '../../context';
import useFetch from '../../utils/hooks/useFetch';
import initialData from '../../utils/mocks';

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
  const { authenticated } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  let controller = new AbortController();

  const [sidebarState, setSidebarState] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState(initialData);
  const { fetchData, response, isLoading } = useFetch();
  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    recomendedVideoSelected = { id: { videoId: '' } },
  } = state;
  const [favoritedIcon, setFavoritedIcon] = useState(
    selectedVideoFromState.favorited
  );

  const handleRandomVideos = () => {
    setTimeout(() => {
      fetchData(state.serchedValue, 10, id);
    }, 2000);
  };
  useEffect(() => {
    handleRandomVideos();
  }, []);

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

  const handleFavorites = () => {
    if (recomendedVideoSelected.id.videoId === id) {
      dispatch({
        type: 'SAVE_RECOMENDED_VIDEO',
        payload: {
          recomendedVideoSelected: {
            ...state.recomendedVideoSelected,
            favorited: true,
          },
        },
      });
      dispatch({
        type: 'SAVE_FAVORITES',
        payload: {
          favorites: [...state.favorites, recomendedVideoSelected],
        },
      });
      setFavoritedIcon(recomendedVideoSelected.favorited);
    }
    if (selectedVideoFromState.id.videoId === id) {
      dispatch({
        type: 'SAVE_SELECTED_VIDEO',
        payload: {
          selectedVideo: {
            ...state.selectedVideo,
            favorited: true,
          },
        },
      });
      dispatch({
        type: 'SAVE_FAVORITES',
        payload: {
          favorites: [...state.favorites, selectedVideoFromState],
        },
      });
      setFavoritedIcon(selectedVideoFromState.favorited);
    }
  };

  const deleteFavorites = () => {
    const deletedVideo = state.favorites.filter(
      (item) => item.id.videoId !== id
    );
    dispatch({
      type: 'REMOVE_FAVORITES',
      payload: {
        favorites: deletedVideo,
      },
    });
    if (recomendedVideoSelected.id.videoId === id) {
      dispatch({
        type: 'SAVE_RECOMENDED_VIDEO',
        payload: {
          recomendedVideoSelected: {
            ...state.recomendedVideoSelected,
            favorited: false,
          },
        },
      });
      setFavoritedIcon(recomendedVideoSelected.favorited);
    }
    if (selectedVideoFromState.id.videoId === id) {
      dispatch({
        type: 'SAVE_SELECTED_VIDEO',
        payload: {
          selectedVideo: {
            ...state.selectedVideo,
            favorited: false,
          },
        },
      });
      setFavoritedIcon(selectedVideoFromState.favorited);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ position: 'relative' }}>
      <Header
        title="Suetube videos"
        handleMenu={handleOpenMenu}
        authenticated={authenticated}
      />
      {sidebarState ? <Sidebar /> : null}
      <section className="homepage">
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
                        favoritedIcon ? deleteFavorites() : handleFavorites()
                      }
                    >
                      <ReactSVG
                        src={
                          favoritedIcon
                            ? '/favorite.svg'
                            : '/favorite-empty.svg'
                        }
                      />
                      <p>{favoritedIcon ? 'Remove' : 'Add'} to Favorites</p>
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
          </ListVideosContainer>
        </DetailsContainer>
      </section>
    </div>
  );
};

export default DetailsPage;
