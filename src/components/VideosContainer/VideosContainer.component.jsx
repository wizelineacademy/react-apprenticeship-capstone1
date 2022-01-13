import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoCard from '../VideoCard';
import { VideosContainerStyled } from './VideosContainer.styled';

const VideosContainer = ({ videos }) => {
  return (
    <VideosContainerStyled data-testid="videos-container-component">
      {videos.items ? (
        videos.items.map((video) => {
          return (
            <VideoCard
              imgsrc={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              description={video.snippet.description}
              key={video.id.videoId}
            />
          );
        })
      ) : (
        <></>
      )}
    </VideosContainerStyled>
  );
};

export default VideosContainer;
