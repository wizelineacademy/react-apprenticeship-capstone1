import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../utils/store/StoreContext';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import classes from './VideoCard.module.css';

const VideoCard = ({ videoData, isRelatedVideo }) => {
  const { getRelatedVideos } = useGetVideos();
  const history = useHistory();
  const { dispatch } = useContext(StoreContext);

  const updateCurrentVideoData = () => {
    //This action set the current video data in a new object in the global context
    dispatch({ type: 'setSelectedVideoData', payload: videoData });
    getRelatedVideos(videoData.id);
    history.push(`/video-detail/${videoData.id}`);
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
          <div className={classes['video-card-description']}>
            <p>{videoData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
