import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import DetailPage from '../../pages/Detail/Detail.page';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import LoginPage from '../../pages/Login';

import { AppProvider } from '../Context/AppContext';

function App() {
  const theme = {
    tablet: '768px',
    mobile: '414px',
  };
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/:videoId">
                  <DetailPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
