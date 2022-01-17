import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledCard } from './Card.styled';
import { timePublished } from '../../utils/timePublished';

function Card({ snippet, id, video }) {
  const { title, description, publishTime } = snippet;
  const image = snippet.thumbnails ? snippet.thumbnails.default.url : null;
  const videoId = id;

  const { getVideoDetails } = useContext(AppContext);

  return (
    <StyledCard>
      <div>{image && <img src={image} alt="" />}</div>
      <div id="video-description">
        <h5>{title}</h5>
        <p>{description}</p>
        <p> Published: {publishTime && timePublished(publishTime)}</p>
        <div>
          {videoId && (
            <Link
              to={videoId}
              onClick={() => getVideoDetails(video)}
              video={video}
            >
              <FaYoutube id="youtube" />
            </Link>
          )}
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
