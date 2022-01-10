import React from 'react';
import { StyledCard } from '../Styles/Card.styled';

const timePublished = function get_time_diff(datetime) {
  var milisec_diff = Math.abs(new Date() - new Date(datetime)),
    days = (milisec_diff / 3600e3 / 24) | 0,
    respvalue = '';
  if (days) respvalue += days + ' days ago.';

  return respvalue;
};

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
