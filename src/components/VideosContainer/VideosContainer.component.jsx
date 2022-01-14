import React, { useContext } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VideosContainerStyled } from './VideosContainer.styled';
import useFetchYoutubeVideos from '../../hooks/useFetchYoutubeVideos';
import usePopulateVideoCards from '../../hooks/usePopulateVideoCards';
import SearchContext from '../../context/search-context';

const VideosContainer = () => {
  const searchContext = useContext(SearchContext);
  const videosList = useFetchYoutubeVideos({
    queryString: searchContext.searchQuery,
  });
  const videoCards = usePopulateVideoCards(videosList);

  return (
    <VideosContainerStyled data-testid="videos-container-component">
      {videoCards}
    </VideosContainerStyled>
  );
};

export default VideosContainer;
