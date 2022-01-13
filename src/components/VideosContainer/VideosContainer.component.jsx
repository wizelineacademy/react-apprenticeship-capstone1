import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VideosContainerStyled } from './VideosContainer.styled';
import useFetchYoutubeVideos from '../../hooks/useFetchYoutubeVideos';
import usePopulateVideoCards from '../../hooks/usePopulateVideoCards';

const VideosContainer = () => {
  const videosList = useFetchYoutubeVideos({ queryString: 'wizeline' });
  const videoCards = usePopulateVideoCards(videosList);

  return (
    <VideosContainerStyled data-testid="videos-container-component">
      {videoCards}
    </VideosContainerStyled>
  );
};

export default VideosContainer;
