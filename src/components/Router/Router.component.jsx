import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StoreContext } from '../../utils/store/StoreContext';
import VideoDetail from '../../pages/VideoDetail/VideoDetail.page';
import Favorites from '../../pages/Favorites/Favorites.page';
import HomePage from '../../pages/Home';

const Router = () => {
  const { store } = useContext(StoreContext);
  const { selectedVideoData, isLogedIn } = store;

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/favorites">
        {isLogedIn ? <Favorites /> : <Redirect to="/" />}
      </Route>
      <Route path="/video-detail/:videoId">
        {selectedVideoData ? <VideoDetail /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export default Router;
