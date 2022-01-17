import React from 'react';
import VideoDetailsCard from '../VideoDetailsCard';
import VideoRecommendationsList from '../VideoRecomendationsList';
import { VideoDetailsViewStyled } from './VideoDetailsView.styled';

const VideoDetailsView = () => {
  return (
    <VideoDetailsViewStyled>
      <VideoDetailsCard />
      <VideoRecommendationsList />
    </VideoDetailsViewStyled>
  );
};

export default VideoDetailsView;
