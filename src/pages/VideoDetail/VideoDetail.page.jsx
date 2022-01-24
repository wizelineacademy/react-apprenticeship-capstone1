import React, { useContext } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RealtedVideos/RelatedVideos.component';
import { StoreContext } from '../../utils/store/store-context';
import classes from './VideoDetail.module.css';

const VideoDetail = () => {
  const { selectedVideoData } = useContext(StoreContext);

  return (
    <section className={classes['detail-container']}>
      <div className={classes['detail-left']}>
        <h1>{selectedVideoData.title}</h1>
        <VideoPlayer videoId={selectedVideoData.id} />
        <p>{selectedVideoData.description}</p>
      </div>
      <div className={classes['detail-right']}>
        <RelatedVideos relatedVideoId={selectedVideoData.id} />
      </div>
    </section>
  );
};

export default VideoDetail;
