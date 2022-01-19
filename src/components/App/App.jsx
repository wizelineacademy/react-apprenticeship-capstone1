import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/Home';
import DetailPage from '../../pages/Detail/Detail.page';
import Favorites from '../../pages/Favorites/Favorites';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import { AppProvider } from '../Context/AppContext';

function App() {
  const theme = {
    tablet: '768px',
    mobile: '414px',
  };

  return (
    <Auth0Provider
      domain="dev-1yh8vsh8.us.auth0.com"
      clientId="Kw9Uofc1BiE6knH7ekcxq02OPpP4D4yA"
      redirectUri={window.location.origin}
      cacheLocation={'localstorage'}
    >
      <AppProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/favorites">
                  <Favorites />
                </Route>
                <Route exact path="/:videoId">
                  <DetailPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </Auth0Provider>
  );
}

export default App;
