import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import he from 'he';

import './VideoCard.styles.scss';
import { useAuth } from '@providers/Auth';

function VideoCard(props) {
  let navigate = useNavigate();
  const { authenticated, isFavorite } = useAuth();

  return (
    <div
      className={'video-card ' + props.className}
      onClick={() => navigate(`details/${props.item.id.videoId}`)}
    >
      <img
        src={
          props.item.snippet.thumbnails.medium.url
            ? props.item.snippet.thumbnails.medium.url
            : null
        }
        alt="video&#39;s image"
        className="video-card__image"
      />
      <div className="video-card__info">
        <div className="video-card__title-column">
          <h4 className="video-card__title">
            {he.decode(props.item.snippet.title)}
          </h4>
          <h5>{moment(new Date(props.item.snippet.publishTime)).fromNow()}</h5>
        </div>
        {authenticated ? (
          <FontAwesomeIcon
            icon={[isFavorite(props.item) ? 'fas' : 'far', 'heart']}
            className="video-card__like-icon"
          />
        ) : null}
      </div>
    </div>
  );
}

VideoCard.defaultProps = {
  className: '',
  item: {},
};

export default VideoCard;
