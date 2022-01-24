import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Layout/Header/Header';
import MainContainer from '../Layout/MainContainer/MainContainer';

import Favorites from '../Favorites/Favorites.component';
import Login from '../Login/Login.component';

import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail/VideoDetail.page';

import { useGetVideos } from '../../utils/hooks/useGetVideos';
import { StoreContext } from '../../utils/store/store-context';

const App = () => {
  const [favsIsOpen, setFavsIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const { isLoading, error, getVideos } = useGetVideos();

  const { videoList, selectedVideoData } = useContext(StoreContext);

  const favoritesToggle = () => {
    setFavsIsOpen(!favsIsOpen);
  };

  const loginToggle = () => {
    setLoginIsOpen(!loginIsOpen);
  };

  useEffect(() => {
    //Get videos as son as the app start
    getVideos('Classic Rock');
  }, []);

  const printHomeContent = () => {
    return (
      <>
        {!isLoading && videoList.length > 0 && <HomePage />}
        {!isLoading && videoList.length === 0 && !error && (
          <p>Content not found</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </>
    );
  };

  return (
    <>
      <Header onFavoritesToggle={favoritesToggle} onLoginToggle={loginToggle} />
      <Favorites isOpen={favsIsOpen} onClose={favoritesToggle} />
      {loginIsOpen && <Login onClose={loginToggle} />}
      <MainContainer>
        <Switch>
          <Route exact path="/">
            {printHomeContent()}
          </Route>
          <Route path="/:videoId">
            {selectedVideoData ? <VideoDetail /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </MainContainer>
    </>
  );
};

export default App;
