import React from 'react';
import Layout from '../Layout';
import Header from '../Header';
import HomeView from '../../pages/HomeView';
import AppState from '../../context/useAppState';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import VideoDetailsView from '../../pages/VideoDetailsView';
function App() {
  return (
    <BrowserRouter>
      <AppState>
        <Layout>
          <Header />
          <Switch>
            <Route path={'/home'}>
              <HomeView />
            </Route>
            <Route path={'/videos'}>
              <VideoDetailsView></VideoDetailsView>
            </Route>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </Layout>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
