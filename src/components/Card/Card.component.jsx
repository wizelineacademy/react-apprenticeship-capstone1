import React from 'react';
import { StyledCard } from '../Card/Card.styled';
import { timePublished } from '../../utils/timePublished';

function Card({ title, description, image, data }) {
  return (
    <StyledCard>
      <div>
        <img src={image} alt="" />
      </div>
      <div id="video-description">
        <h4>{title}</h4>
        <p>{description}</p>
        <p> Published: {timePublished(data)}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
