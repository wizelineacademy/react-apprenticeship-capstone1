import React, { useContext } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import VideoGrid from '../../components/VideoGrid/VideoGrid.component';
import classes from './Home.module.css';

const HomePage = () => {
  const { store } = useContext(StoreContext);
  const { searchParamTitle, videoList, fetchIsLoading, fetchError } = store;

  return (
    <section className={classes['home-container']}>
      <h1>{searchParamTitle}</h1>
      {!fetchIsLoading && videoList.length > 0 && (
        <VideoGrid videoList={videoList} />
      )}
      {!fetchIsLoading && videoList.length === 0 && !fetchError && (
        <p>Content not found</p>
      )}
      {!fetchIsLoading && fetchError && <p>{fetchError}</p>}
      {fetchIsLoading && <p>Loading...</p>}
    </section>
  );
};

export default HomePage;
