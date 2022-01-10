import React from 'react';
import { StyledContainer } from '../Styles/Container.styled';

import Card from '../Card/Card.component';
import data from '../../data.json';

function Container() {
  return (
    <StyledContainer>
      {data.items.map((video, index) => (
        <Card
          key={index}
          title={video.snippet.title}
          description={video.snippet.description}
          image={video.snippet.thumbnails.default.url}
          data={video.snippet.publishTime}
        />
      ))}
    </StyledContainer>
  );
}

export default Container;
