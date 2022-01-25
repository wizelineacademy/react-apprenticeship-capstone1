import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../utils/store/store-context';
import VideoCard from '../VideoCard';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import classes from './RelatedVideos.module.css';

const RelatedVideos = ({ relatedVideoId }) => {
  const { relatedVideoList } = useContext(StoreContext);
  const { isLoading, error, getRelatedVideos } = useGetVideos();

  useEffect(() => {
    getRelatedVideos(relatedVideoId);
  }, []);

  const printRelatedVideoList = () => {
    return (
      <div className={classes['related-list']}>
        {relatedVideoList.map((video) => (
          <VideoCard videoData={video} key={video.id} isRelatedVideo={true} />
        ))}
      </div>
    );
  };

  const printRelatedVideosContent = () => {
    return (
      <>
        {!isLoading && relatedVideoList.length > 0 && printRelatedVideoList()}
        {!isLoading && relatedVideoList.length === 0 && !error && (
          <p>Content not found</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </>
    );
  };

  return (
    <section className={classes['related-container']}>
      <h2>Related Videos</h2>
      <div className={classes['related-scroll-list']}>
        {printRelatedVideosContent()}
      </div>
    </section>
  );
};

export default RelatedVideos;
