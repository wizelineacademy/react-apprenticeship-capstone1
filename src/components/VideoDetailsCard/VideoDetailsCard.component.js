import React, { useContext } from 'react';
import CurrentVideoContext from '../../context/current-video-context';
import {
  VideoDetailsIframe,
  VideoDetailsCardStyled,
} from './VideoDetailsCard.styled';

const VideoDetailsCard = () => {
  const currentVideoContext = useContext(CurrentVideoContext);
  return (
    <VideoDetailsCardStyled>
      <VideoDetailsIframe
        src={`https://www.youtube.com/embed/${currentVideoContext.videoDetails.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></VideoDetailsIframe>
      <h1>{currentVideoContext.videoDetails.title}</h1>
      <p>{currentVideoContext.videoDetails.description}</p>
    </VideoDetailsCardStyled>
  );
};

export default VideoDetailsCard;
