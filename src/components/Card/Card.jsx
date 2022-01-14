import React, { useState } from 'react';
import { FaStar, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card.styled';
import { timePublished } from '../../utils/timePublished';

function Card({ snippet, id }) {
  const { title, description, publishTime } = snippet;
  const image = snippet.thumbnails ? snippet.thumbnails.default.url : null;
  const videoId = id;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <StyledCard>
      <div>{image && <img src={image} alt="" />}</div>
      <div id="video-description">
        <h5>{title}</h5>
        <p>{description}</p>
        <p> Published: {publishTime && timePublished(publishTime)}</p>
        <div>
          <Link to={videoId}>
            <FaYoutube id="youtube" />
          </Link>
          <FaStar
            className={isFavorite ? 'favorite on' : 'favorite'}
            onClick={() => setIsFavorite((prev) => !prev)}
          />
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
