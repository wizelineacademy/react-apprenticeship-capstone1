import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './VideoCard.styles.scss';
import image from './pexels-amina-filkins-5414061.jpeg';

function VideoCard(props) {
  return (
    <div className={'video-card ' + props.className} onClick={props.onClick}>
      <img
        src={props.image ? props.image : image}
        alt="video&#39;s image"
        className="video-card__image"
      />
      <div className="video-card__info">
        <div className="video-card__title-row">
          <h3>{props.title}</h3>
          <FontAwesomeIcon
            icon={[props.liked ? 'fas' : 'far', 'heart']}
            className="video-card__liked-icon"
          />
        </div>
        <h5>
          {props.views} - {props.time}
        </h5>
      </div>
    </div>
  );
}

VideoCard.defaultProps = {
  className: '',
  image: null,
  liked: false,
  title: 'Video title',
  views: '4.2M views',
  time: '3 years ago',
  onClick: null,
};

export default VideoCard;
