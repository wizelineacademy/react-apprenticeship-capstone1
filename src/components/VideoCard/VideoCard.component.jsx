import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { StoreContext } from '../../utils/store/store-context';

import classes from './VideoCard.module.css';

const VideoCard = ({ videoData, isRelatedVideo }) => {
  const { setSelectedVideoData } = useContext(StoreContext);

  const history = useHistory();

  const updateCurrentVideoData = () => {
    //This action set the current video data in a new object in the global context
    setSelectedVideoData(videoData);
    history.push(`/${videoData.id}`);
  };

  return (
    <div
      className={`${classes['video-card']} ${
        isRelatedVideo && classes['related-video']
      }`}
      data-testid="VideoCard"
      onClick={updateCurrentVideoData}
    >
      <div className={classes['video-thumbnail']}>
        <img
          className={classes['video-card-image']}
          src={videoData.thumbnail}
          alt={videoData.title}
        />
      </div>
      <div className={classes['video-info']}>
        <h3 className={classes['video-card-title']}>{videoData.title}</h3>
        {!isRelatedVideo && (
          <p className={classes['video-card-description']}>
            {videoData.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
