import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@providers/Auth';
import VideoDetails from '@pages/VideoDetails';

describe('VideoDetails...', () => {
  it('should render', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <AuthProvider defaultAuthenticated={true}>
            <VideoDetails data-testid="video-details-page" />
          </AuthProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('video-details-page')).toBeInTheDocument();
    });
  });
});
