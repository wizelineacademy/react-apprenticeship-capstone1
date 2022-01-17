import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
} from '../Details/Details.styles';
import RecomendedCard from '../../components/RecommendedCard/Recommendedcard.component';

const DetailsPage = () => {
  const { authenticated } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  let controller = new AbortController();

  const [sidebarState, setSidebarState] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState(initialData.items);
  const { fetchData, response, isLoading } = useFetch();

  const { state, dispatch } = useContext(Context);
  const {
    selectedVideo: selectedVideoFromState = { snippet: [] },
    recomendedVideoSelected = { id: { videoId: '' } },
  } = state;

  const handleRandomVideos = () => {
    try {
      if (response) {
        setRelatedVideos(response.items);
      } else {
        setRelatedVideos(initialData.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRandomVideos();
    return () => {
      controller.abort();
    };
  }, [response]);

  useEffect(() => {
    setTimeout(() => {
      fetchData(state.serchedValue, 10, id);
    }, 1000);
  }, []);

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
  };

  const handleRelatedVideo = (id, item) => {
    dispatch({
      type: 'SAVE_RECOMENDED_VIDEO',
      payload: {
        ...state,
        recomendedVideoSelected: item,
      },
    });
    history.push(`/details/${id}`);
  };

  console.log('relatedVideos', relatedVideos);
  console.log('response', response);
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
              {recomendedVideoSelected.id.videoId === id ? (
                <>
                  <h1>{recomendedVideoSelected.snippet.title}</h1>
                  <p>{recomendedVideoSelected.snippet.description}</p>
                </>
              ) : (
                <>
                  <h1>{selectedVideoFromState.snippet.title}</h1>
                  <p>{selectedVideoFromState.snippet.description}</p>
                </>
              )}
            </Information>
          </VideoContainer>
          <ListVideosContainer>
            {relatedVideos.map((item) => (
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
