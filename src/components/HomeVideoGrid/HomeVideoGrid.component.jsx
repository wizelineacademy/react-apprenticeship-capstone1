import React, { useContext } from 'react';
import VideoCard from '../VideoCard';
import { StoreContext } from '../../utils/store/store-context';

import classes from './HomeVideoGrid.module.css';

const HomeVideoGrid = () => {
  const { videoList } = useContext(StoreContext);

  return (
    <div className={classes['video-grid']}>
      {videoList.map((video) => (
        <VideoCard videoData={video} key={video.id} />
      ))}
    </div>
  );
};

export default HomeVideoGrid;
