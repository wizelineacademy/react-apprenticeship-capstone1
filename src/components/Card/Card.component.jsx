import React from 'react';

import { CardContainer, Subtitle, Title, VideoContainer } from './Card.styles';

const Card = ({ title, subtitle }) => {
  return (
    <CardContainer>
      <VideoContainer>video here</VideoContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CardContainer>
  );
};

export default Card;
