import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { BallTriangle } from 'react-loader-spinner';

import Layout from '../../components/Layout/Layout.component';
import { Context } from '../../context';
import { useAuth } from '../../providers/Auth';
import useFetch from '../../utils/hooks/useFetch';
import { initialData } from '../../utils/mocks';
import useFavorites from '../../utils/hooks/useFavorites';
import SearchDashboard from '../../components/SearchDashboard/SearchDashboard.component';
import RecomendedCard from '../../components/RecommendedCard/Recommendedcard.component';
import {
  DetailsContainer,
  VideoContainer,
  Video,
  ListVideosContainer,
  Information,
  FavoriteButton,
  TitleContainer,
} from '../Details/Details.styles';

const DetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { authenticated } = useAuth();
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  let controller = new AbortController();
  const [relatedVideos, setRelatedVideos] = useState(initialData);
  const { fetchData, isLoading, error } = useFetch();
  const [favorited, setFavorited] = useState(false);
  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    favorites,
    response: responseState,
  } = state;
  const { search } = history.location;
  const { addFavorites, deleteFavorites, isfavorited } = useFavorites();
  const handleRandomVideos = () => {
    fetchData(state.serchedValue, 10, id);
  };

  useEffect(() => {
    handleRandomVideos();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let favorite;
    if (id === selectedVideoFromState.id.videoId)
      favorite = isfavorited(selectedVideoFromState);
    setFavorited(favorite);
    // eslint-disable-next-line
  }, [favorites, isfavorited]);

  useEffect(() => {
    try {
      if (responseState) {
        setRelatedVideos(responseState);
      } else {
        setRelatedVideos(initialData);
      }
    } catch (error) {
      console.log(error);
    }
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line
  }, [responseState]);

  const handleRelatedVideo = (id, item) => {
    dispatch({
      type: 'SAVE_RECOMENDED_VIDEO',
      payload: {
        ...state,
        selectedVideo: {
          ...item,
        },
      },
    });
    history.push(`/details/${id}`);
  };

  if (isLoading)
    return (
      <DetailsContainer>
        <BallTriangle color="#e64398" height={100} width={100} />
      </DetailsContainer>
    );
  if (error) return <p>No search found, try again please</p>;

  return (
    <Layout>
      <div style={{ position: 'relative' }}>
        {search === '?name=newSearch' ? (
          <SearchDashboard
            serchedData={responseState ? responseState.items : []}
          />
        ) : (
          <section className="details">
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
                          {selectedVideoFromState.id.videoId === id
                            ? selectedVideoFromState.snippet.title
                            : 'No title in this video'}
                        </h3>
                        {authenticated ? (
                          <FavoriteButton
                            onClick={() =>
                              favorited ? deleteFavorites(id) : addFavorites(id)
                            }
                          >
                            <ReactSVG
                              src={
                                favorited
                                  ? '/favorite.svg'
                                  : '/favorite-empty.svg'
                              }
                            />
                            <p>{favorited ? 'Remove' : 'Add'} to Favorites</p>
                          </FavoriteButton>
                        ) : null}
                      </TitleContainer>
                      <p>
                        {selectedVideoFromState.id.videoId === id
                          ? selectedVideoFromState.snippet.description
                          : 'No description in this video'}
                      </p>
                    </>
                  }
                </Information>
              </VideoContainer>
              <ListVideosContainer>
                {relatedVideos.items.map((item) =>
                  !item.snippet ? null : (
                    <RecomendedCard
                      handleRelatedVideo={() =>
                        handleRelatedVideo(item.id.videoId, item)
                      }
                      key={item.id.videoId}
                      title={item.snippet.title}
                      videoContent={item.snippet.thumbnails.high.url}
                      description={item.snippet.description}
                    />
                  )
                )}
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
          </section>
        )}
      </div>
    </Layout>
  );
};

export default DetailsPage;
