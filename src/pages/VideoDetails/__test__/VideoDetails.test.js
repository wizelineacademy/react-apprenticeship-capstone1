import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@providers/Auth';
import { FavoritesProvider } from '@providers/Favorites';
import VideoDetails from '@pages/VideoDetails';

window.scrollTo = jest.fn();

describe('VideoDetails...', () => {
  it('should render', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AuthProvider defaultAuthenticated={true}>
            <FavoritesProvider>
              <VideoDetails data-testid="video-details-page" />
            </FavoritesProvider>
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('video-details-page')).toBeInTheDocument();
    });
  });
});
