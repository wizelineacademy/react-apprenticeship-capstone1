import React from 'react';
import FavoritesView from '../FavoritesView';
import FavoritesViewDetail from '../FavoritesViewDetail';
import { Route, Switch, Redirect } from 'react-router-dom';
function PrivateContainer() {
  return (
    <Switch>
      <Route path="/private/list">
        <FavoritesView></FavoritesView>
      </Route>
      <Route exact path="/private/videos">
        <FavoritesViewDetail></FavoritesViewDetail>
      </Route>
      <Route
        exact
        path="/private"
        render={() => <Redirect to="/private/list" />}
      />
    </Switch>
  );
}

export default PrivateContainer;
