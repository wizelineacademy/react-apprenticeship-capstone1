import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import he from 'he';

import './VideoCard.styles.scss';
import { useAuth } from '@providers/Auth';

function VideoCard(props) {
  const video = props.item;
  const { authenticated, isFavorite } = useAuth();

  return (
    <div className={'video-card ' + props.className} onClick={props.onClick}>
      <img
        src={
          video.snippet.thumbnails.medium.url
            ? video.snippet.thumbnails.medium.url
            : null
        }
        alt="video&#39;s image"
        className="video-card__image"
      />
      <div className="video-card__info">
        <div className="video-card__title-column">
          <h4 className="video-card__title">
            {he.decode(video.snippet.title)}
          </h4>
          <h5>{moment(new Date(video.snippet.publishTime)).fromNow()}</h5>
        </div>
        {authenticated ? (
          <FontAwesomeIcon
            icon={[isFavorite(video) ? 'fas' : 'far', 'heart']}
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
  onClick: null,
};

export default VideoCard;
