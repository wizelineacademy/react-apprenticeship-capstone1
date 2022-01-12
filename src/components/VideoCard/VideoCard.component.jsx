import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import he from 'he';

import './VideoCard.styles.scss';

/*
        <div className="video-card__title-row">
          <h4 className="video-card__title">{video.snippet.title}</h4>
          <FontAwesomeIcon
            icon={[props.liked ? 'fas' : 'far', 'heart']}
            className="video-card__liked-icon"
          />
        </div>
        <h5>
          {moment(new Date(video.snippet.publishTime)).fromNow()}
        </h5>
*/

function VideoCard(props) {
  const video = props.item;

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
        <FontAwesomeIcon
          icon={[props.liked ? 'fas' : 'far', 'heart']}
          className="video-card__like-icon"
        />
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
