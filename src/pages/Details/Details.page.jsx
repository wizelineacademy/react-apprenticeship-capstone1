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
  const [sidebarState, setSidebarState] = useState(false);
  const initialVideo = {
    snippet: '',
    title: 'bla bla',
  }
  const [video, setVideo] = useState(initialVideo);
  const { id } = useParams();
  const { state } = useContext(Context);
  const [relatedVideos, setRelatedVideos] = useState({});
  const { fetchData, response, isLoading } = useFetch();

  //TODO: declare getRandomVideos here

  // useEffect(() => {
  //   // fetchData(state.serchedValue, 20, id);
  //   const getRandomVideos = () => {
  //     // fetchData(state.serchedValue, 20, id);
  //     // option 1 use async/await
  //     // option 2 useEffect looking for changes in the response (as you did it in the other component)
  //     try {
  //       if (isLoading) return <p>is loaaaadiiiing....</p>; // delete this code and put it as a return of the whole component
  //       if (response) setRelatedVideos(response);
  //       else setRelatedVideos([]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getRandomVideos();
  //   console.log('response dentro del effect', response);
  // }, []);

  //TODO: validate that this only runs when parameters are not null.
  useEffect(() => {
    if (state && state.snippet) {
      // assign values ...
      // setVideo
    }
    fetchData(state.serchedValue, 20, id);
  }, []);

  useEffect(() => {
    if (response) {
      //TODO: Process data
      // const tempData = response.('array').map(m=>{
      //   return {
      //     url: m.url
      //     img: m.img
      //   }
      // })
      setRelatedVideos(response);
    }
    return () => {
      //clean routine
      // ex. clean state of component
    };
  }, [response]);

  function handleOpenMenu() {
    setSidebarState(!sidebarState);
  }
  //TODO: Put it above
  //TODO: THIS IN USEFFECT
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  const { selectedVideo = {snippet: ''} } = state;
  const { snippet } = selectedVideo;
  const { snippet: relatedSnippet } = relatedVideos;

  console.log(relatedSnippet);

  //TODO: Add Loading state here...
  // if(loading ) return pepe

  return (
    // isLoading && <></>
    // !isLoading &&
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
                {selectedVideo ? (
                  <>
                    <h1>{snippet.title}</h1>
                    <p>{snippet.description}</p>
                  </>
                ) : (
                  <p>no data found</p>
                )}
              </Information>
            </VideoContainer>
            <ListVideosContainer>
              {Array.from({ length: 20 }, () => (
                <RecomendedCard
                  title="title of recommended video"
                  videoContent=""
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
