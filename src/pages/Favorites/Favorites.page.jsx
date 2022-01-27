import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import classes from './Favorites.module.css';

const Favorites = () => {
  const { store, dispatch } = useContext(StoreContext);
  const { favoritesVideoList } = store;

  useEffect(() => {
    const favoritesLocalStorage = window.localStorage.getItem('favoriteVideos');
    if (favoritesLocalStorage) {
      dispatch({
        type: 'setFavoritesVideoList',
        payload: JSON.parse(favoritesLocalStorage),
      });
    }
  }, [dispatch]);

  return (
    <section className={classes['favorites-container']}>
      <h1>Favorites</h1>
      {favoritesVideoList.length > 0 ? (
        <VideoGrid videoList={favoritesVideoList} />
      ) : (
        <p>There are no favorite videos yet</p>
      )}
    </section>
  );
};

export default Favorites;
