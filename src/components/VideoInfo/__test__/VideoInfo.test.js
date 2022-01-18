import { render, screen } from '@testing-library/react';

import { FavoritesProvider } from '@providers/Favorites';
import VideoInfo from '@components/VideoInfo';

describe('VideoInfo...', () => {
  beforeEach(() => {
    render(
      <FavoritesProvider>
        <VideoInfo data-testid="video-info-component" />
      </FavoritesProvider>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('video-info-component')).toBeInTheDocument();
  });
});
