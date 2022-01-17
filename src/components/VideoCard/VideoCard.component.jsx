import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CurrentVideoContext from '../../context/current-video-context';
import {
  VideoCardStyled,
  VideoThumbnail,
  VideoTitle,
  VideoDescription,
} from './VideoCard.styled';

const VideoCard = (props) => {
  const currentVideoContext = React.useContext(CurrentVideoContext);
  const onClickHandler = () => {
    currentVideoContext.setVideoDetails({
      id: props.id,
      title: props.title,
      description: props.description,
    });
    currentVideoContext.setIsActive(true);
  };

  return (
    <VideoCardStyled
      data-testid="video-card-component"
      onClick={onClickHandler}
      id={props.id}
    >
      <VideoThumbnail src={props.imgsrc} data-testid="video-card-thumbnail" />
      <VideoTitle>{props.title}</VideoTitle>
      <VideoDescription>{props.description}</VideoDescription>
      {props.children}
    </VideoCardStyled>
  );
};

export default VideoCard;
