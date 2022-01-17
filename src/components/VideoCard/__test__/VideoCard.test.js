import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { AuthProvider } from '@providers/Auth';
import VideoCard from '@components/VideoCard';

describe('VideoCard...', () => {
  beforeEach(() => {
    let date = new Date();
    date.setDate(date.getDate() - 7);

    render(
      <BrowserRouter>
        <AuthProvider defaultAuthenticated={{ authenticated: true }}>
          <VideoCard
            testId="video-card-component"
            item={{
              id: { videoId: 'id-test' },
              snippet: {
                title: 'title-test',
                thumbnails: { medium: { url: 'image-test' } },
                publishTime: date,
              },
            }}
          />

          <Routes>
            <Route exact path="/" element={<i>Home view</i>} />
            <Route exact path="/details/:id" element={<i>Details view</i>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('video-card-component')).toBeInTheDocument();
  });

  it('should render an image', () => {
    expect(screen.getByAltText(/.*video.*/i)).toBeInTheDocument();
  });

  it('should render a title', () => {
    expect(screen.queryByText('title-test')).toBeInTheDocument();
  });

  it('should render a publish time', () => {
    expect(screen.queryByText(/.*7.*days.*ago.*/i)).toBeInTheDocument();
  });

  it('should route to details view on click', () => {
    userEvent.click(screen.getByTestId('video-card-component'));
    expect(screen.queryByText(/details view/i)).toBeInTheDocument();
  });
});
