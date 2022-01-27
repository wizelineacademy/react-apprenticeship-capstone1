import React, { useContext } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedVideos from '../../components/RealtedVideos/RelatedVideos.component';
import classes from './VideoDetail.module.css';

const VideoDetail = () => {
  const { store, dispatch } = useContext(StoreContext);
  const { isLogedIn, selectedVideoData } = store;

  const localVideosStorage = window.localStorage.getItem('favoriteVideos');

  const addToFavorites = () => {
    if (!localVideosStorage) {
      window.localStorage.setItem(
        'favoriteVideos',
        JSON.stringify([selectedVideoData])
      );
      dispatch({ type: 'setFavoritesVideoList', payload: [selectedVideoData] });
    } else {
      let newLocalVideosStorage = JSON.parse(localVideosStorage);

      const isVideoAdded =
        newLocalVideosStorage.filter(
          (video) => video.id === selectedVideoData.id
        ).length > 0;

      if (!isVideoAdded) {
        newLocalVideosStorage.push(selectedVideoData);

        window.localStorage.setItem(
          'favoriteVideos',
          JSON.stringify(newLocalVideosStorage)
        );
        dispatch({
          type: 'setFavoritesVideoList',
          payload: newLocalVideosStorage,
        });
      } else {
        alert('Video already added, please select another one');
      }
    }
  };

  return (
    <section className={classes['detail-container']}>
      <div className={classes['detail-left']}>
        <h1>{selectedVideoData.title}</h1>
        <VideoPlayer videoId={selectedVideoData.id} />
        {isLogedIn && (
          <button onClick={addToFavorites} className="primary-btn">
            Add to Favorites
          </button>
        )}
        <p>{selectedVideoData.description}</p>
      </div>
      <div className={classes['detail-right']}>
        <RelatedVideos />
      </div>
    </section>
  );
};

export default VideoDetail;
