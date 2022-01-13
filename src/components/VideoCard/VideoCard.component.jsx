import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  VideoCardStyled,
  VideoThumbnail,
  VideoTitle,
  VideoDescription,
} from './VideoCard.styled';

const VideoCard = (props) => {
  return (
    <VideoCardStyled data-testid="video-card-component">
      <VideoThumbnail src={props.imgsrc} data-testid="video-card-thumbnail" />
      <VideoTitle>{props.title}</VideoTitle>
      <VideoDescription>{props.description}</VideoDescription>
      {props.children}
    </VideoCardStyled>
  );
};

export default VideoCard;
