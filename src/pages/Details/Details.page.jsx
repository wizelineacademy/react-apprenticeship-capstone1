import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import Header from '../../components/Header/Header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import { Context } from '../../context';
import useFetch from '../../utils/hooks/useFetch';

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

  const initialVideo = {
    items: [
      {
        etag: '',
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
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  let controller = new AbortController();

  const [sidebarState, setSidebarState] = useState(false);
  const [relatedVideos, setRelatedVideos] = useState(initialVideo);
  const { fetchData, response, isLoading } = useFetch();

  const { state } = useContext(Context);
  const { selectedVideo: selectedVideoFromState = { snippet: [] } } = state;

  const handleRandomVideos = () => {
    try {
      fetchData(state.serchedValue, 10, id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRandomVideos();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (response !== null) {
      setRelatedVideos(response);
    }
  }, [response]);

  const handleOpenMenu = () => {
    setSidebarState(!sidebarState);
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
        {authenticated ? (
          <DetailsContainer>
            <VideoContainer>
              <Video>
                <iframe src={videoSrc} title="Video player" />
              </Video>
              <Information>
                {selectedVideoFromState ? (
                  <>
                    <h1>{selectedVideoFromState.snippet.title}</h1>
                    <p>{selectedVideoFromState.snippet.description}</p>
                  </>
                ) : (
                  <p>no data found</p>
                )}
              </Information>
            </VideoContainer>
            <ListVideosContainer>
              {relatedVideos.items.map((item) => (
                <RecomendedCard
                  key={item.id.videoId}
                  title={item.snippet.title}
                  videoContent={item.snippet.thumbnails.high.url}
                  description={item.snippet.description}
                />
              ))}
            </ListVideosContainer>
          </DetailsContainer>
        ) : (
          <Link to="/login">details videos, log here</Link>
        )}
      </section>
    </div>
  );
};

export default DetailsPage;
