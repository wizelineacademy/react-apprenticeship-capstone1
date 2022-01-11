import React from 'react';
import {
  CardContainer,
  Title,
  VideoContainer,
} from '../RecommendedCard/RecommendedCard.styles';

const RecomendedCard = ({ videoContent, title }) => {
  return (
    <CardContainer>
      <VideoContainer>{videoContent}</VideoContainer>
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default RecomendedCard;
