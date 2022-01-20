import React from 'react';
import VideoCard from '../VideoCard';

import classes from './HomeVideoGrid.module.css';

const HomeVideoGrid = (props) => {
  return (
    <div className={classes['video-grid']}>
      {props.videoList.map((video) => (
        <VideoCard videoData={video} key={video.id} />
      ))}
    </div>
  );
};

export default HomeVideoGrid;
