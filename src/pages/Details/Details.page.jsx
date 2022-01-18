import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import { Context } from '../../context';
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
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  let controller = new AbortController();

  const [relatedVideos, setRelatedVideos] = useState(initialData);
  const { fetchData, isLoading, error } = useFetch();
  const [favorited, setFavorited] = useState(false);
  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    recomendedVideoSelected = { id: { videoId: '' } },
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
  }, []);

  useEffect(() => {
    let favorite;
    if (id === selectedVideoFromState.id.videoId)
      favorite = isfavorited(selectedVideoFromState);
    if (id === recomendedVideoSelected.id.videoId)
      favorite = isfavorited(recomendedVideoSelected);
    setFavorited(favorite);
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
  }, [responseState]);

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>No search found, try again please</p>;

  return (
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
                        {recomendedVideoSelected.id.videoId === id
                          ? recomendedVideoSelected.snippet.title
                          : selectedVideoFromState.snippet.title}
                      </h3>
                      <FavoriteButton
                        onClick={() =>
                          favorited ? deleteFavorites(id) : addFavorites(id)
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
  );
};

export default DetailsPage;
