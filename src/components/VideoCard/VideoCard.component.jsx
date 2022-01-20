import React from 'react';

import classes from './VideoCard.module.css';

const VideoCard = (props) => {
  return (
    <div className={classes['video-card']} data-testid="VideoCard">
      <img
        className={classes['video-card-image']}
        src={props.videoData.thumbnail}
      />
      <h3 className={classes['video-card-title']}>{props.videoData.title}</h3>
      <p className={classes['video-card-description']}>
        {props.videoData.description}
      </p>
    </div>
  );
};

export default VideoCard;
