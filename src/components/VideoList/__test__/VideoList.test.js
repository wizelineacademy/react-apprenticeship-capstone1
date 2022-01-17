import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { AuthProvider } from '@providers/Auth';
import VideoList from '@components/VideoList';

const mockedLoadMore = jest.fn();

describe('VideoList...', () => {
  beforeEach(() => {
    let date = new Date();
    date.setDate(date.getDate() - 7);

    render(
      <BrowserRouter>
        <AuthProvider defaultAuthenticated={{ authenticated: true }}>
          <VideoList
            data-testid="video-list-component"
            loadMore={mockedLoadMore}
            items={[
              {
                id: { videoId: 'id-test-1' },
                snippet: {
                  title: 'title-test-1',
                  thumbnails: { default: { url: 'image-test-2' } },
                  publishTime: date,
                },
              },
              {
                id: { videoId: 'id-test-2' },
                snippet: {
                  title: 'title-test-2',
                  thumbnails: { default: { url: 'image-test-2' } },
                  publishTime: date,
                },
              },
            ]}
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
    expect(screen.getByTestId('video-list-component')).toBeInTheDocument();
  });

  it('should render prop items', () => {
    expect(screen.getByText('title-test-1')).toBeInTheDocument();
    expect(screen.getByText('title-test-2')).toBeInTheDocument();
    expect(screen.queryAllByAltText(/.*video.*/i)).toHaveLength(2);
    expect(screen.queryAllByText(/.*7.*days.*ago.*/i)).toHaveLength(2);
  });

  it('should call loadMore when load more button is clicked', () => {
    userEvent.click(screen.getByText(/.*load.*more.*/i));
    expect(mockedLoadMore).toHaveBeenCalledTimes(1);
  });
});
