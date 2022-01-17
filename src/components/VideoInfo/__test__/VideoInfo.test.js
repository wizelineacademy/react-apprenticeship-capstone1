import { render, screen } from '@testing-library/react';

import VideoInfo from '@components/VideoInfo';

describe('VideoInfo...', () => {
  beforeEach(() => {
    render(<VideoInfo data-testid="video-info-component" />);
  });

  it('should render', () => {
    expect(screen.getByTestId('video-info-component')).toBeInTheDocument();
  });
});
