import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './VideoInfo.styles.scss';

function VideoInfo(props) {
  return (
    <div className={'video-info ' + props.className}>
      <div className="video-info__title-row">
        <h2>{props.title}</h2>
        <FontAwesomeIcon
          icon={[props.liked ? 'fas' : 'far', 'heart']}
          size="2x"
          className="video-info__liked-icon"
        />
      </div>
      <h4>
        {props.views} - {props.time}
      </h4>
      <p className="video-info__description">{props.description}</p>
    </div>
  );
}

VideoInfo.defaultProps = {
  className: '',
  liked: false,
  title: 'Video title',
  views: '4.2M views',
  time: '3 years ago',
  description: `Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown 
  printer took a galley of type and scrambled it to make a 
  type specimen book. It has survived not only five centuries, 
  but also the leap into electronic typesetting, remaining 
  essentially unchanged. It was popularised in the 1960s 
  with the release of Letraset sheets containing Lorem Ipsum 
  passages, and more recently with desktop publishing software 
  like Aldus PageMaker including versions of Lorem Ipsum.`,
};

export default VideoInfo;
