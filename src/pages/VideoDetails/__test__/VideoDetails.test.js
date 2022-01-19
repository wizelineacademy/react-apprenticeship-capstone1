import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@providers/Auth';
import { ErrorMessageProvider } from '@providers/ErrorMessage';
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
              <ErrorMessageProvider>
                <VideoDetails data-testid="video-details-page" />
              </ErrorMessageProvider>
            </FavoritesProvider>
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('video-details-page')).toBeInTheDocument();
    });
  });
});
