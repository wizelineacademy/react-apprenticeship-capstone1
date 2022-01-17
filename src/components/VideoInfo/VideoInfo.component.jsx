import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import he from 'he';

import './VideoInfo.styles.scss';

function VideoInfo(props) {
  return (
    <div
      data-testid={props['data-testid']}
      className={'video-info ' + props.className}
    >
      <div className="video-info__title-row">
        <h2>{he.decode(props.video.snippet.title)}</h2>
        <FontAwesomeIcon
          icon={[props ? 'fas' : 'far', 'heart']}
          size="2x"
          className="video-info__liked-icon"
        />
      </div>
      <h5>{moment(new Date(props.video.snippet.publishTime)).fromNow()}</h5>
      <p className="video-info__description">
        {props.video.snippet.description}
      </p>
    </div>
  );
}

VideoInfo.defaultProps = {
  'data-testid': '',
  className: '',
  video: {
    snippet: {
      title: '',
      publishTime: new Date(),
      description: '',
    },
  },
};

export default VideoInfo;
