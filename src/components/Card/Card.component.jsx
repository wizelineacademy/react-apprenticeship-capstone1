import React from 'react';

import {
  CardContainer,
  Subtitle,
  Title,
  VideoContainer,
  VideoImage,
} from './Card.styles';

const Card = ({ title, subtitle, handleDetails, videoImage }) => {
  return (
    <CardContainer onClick={handleDetails}>
      <VideoContainer>
        <VideoImage src={videoImage} alt="video img" />
      </VideoContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </CardContainer>
  );
};

export default Card;
