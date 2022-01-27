import React from 'react';
import VideoCard from '../VideoCard';
import classes from './VideoGrid.module.css';

const VideoGrid = ({ videoList }) => {
  return (
    <div className={classes['video-grid']}>
      {videoList.map((video) => (
        <VideoCard videoData={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoGrid;
