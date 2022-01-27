import React, { useContext } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import VideoCard from '../VideoCard';
import classes from './RelatedVideos.module.css';

const RelatedVideos = () => {
  const { store } = useContext(StoreContext);
  const { relatedVideoList } = store;

  return (
    <section className={classes['related-container']}>
      <h2>Related Videos</h2>
      <div className={classes['related-scroll-list']}>
        <div className={classes['related-list']}>
          {relatedVideoList.length > 0 ? (
            relatedVideoList.map((video) => (
              <VideoCard
                videoData={video}
                isRelatedVideo={true}
                key={video.id}
              />
            ))
          ) : (
            <p>Content not found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedVideos;
