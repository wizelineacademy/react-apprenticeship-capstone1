import { render, screen } from '@testing-library/react';

import { AuthProvider } from '@providers/Auth';
import { FavoritesProvider } from '@providers/Favorites';
import VideoInfo from '@components/VideoInfo';

describe('VideoInfo...', () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <FavoritesProvider>
          <VideoInfo data-testid="video-info-component" />
        </FavoritesProvider>
      </AuthProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('video-info-component')).toBeInTheDocument();
  });
});
