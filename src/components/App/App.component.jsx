import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AuthProvider, RequireAuth } from '@providers/Auth';
import { ThemeProvider } from '@providers/Theme';
import { SearchProvider } from '@providers/Search';
import { FavoritesProvider } from '@providers/Favorites';
import Layout from '@components/Layout';
import NotFound from '@pages/NotFound';
import HomePage from '@pages/Home';
import FavoritesPage from '@pages/Favorites';
import VideoDetailsPage from '@pages/VideoDetails';

// Register awesomefont used icons
library.add(fas, far);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <SearchProvider>
            <FavoritesProvider>
              <Layout>
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route
                    exact
                    path="/details/:id"
                    element={<VideoDetailsPage />}
                  />
                  <Route
                    exact
                    path="/favorites"
                    element={
                      <RequireAuth>
                        <FavoritesPage />
                      </RequireAuth>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </FavoritesProvider>
          </SearchProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
