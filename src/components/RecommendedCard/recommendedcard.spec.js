import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecommendedCard from './Recommendedcard.component';

describe('show card of recomended video', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<RecommendedCard />);
    expect(baseElement).toBeTruthy();
  });
  test('card should have a title text', () => {
    const { baseElement, getByText } = render(
      <RecommendedCard title="recommende video" />
    );
    getByText('recommende video');
    expect(baseElement).toBeTruthy();
  });
  test('card should have a description', () => {
    const { baseElement, getByText } = render(
      <RecommendedCard decription="description text" />
    );
    getByText('description text');
    expect(baseElement).toBeTruthy();
  });
  test('Se details of videos', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <RecommendedCard title="video recommended" />
      </Router>
    );
    const recommendedVideo = screen.getByText('video recommended');
    expect(recommendedVideo).toBeInTheDocument();
    userEvent.click(recommendedVideo);
    expect(history.location.pathname).toBe('/');
  });

  test('card has an image of video', () => {
    const { getByRole } = render(
      <RecommendedCard
        videoContent="https://i.ytimg.com/vi/6C9QVEmNLr0/hqdefault.jpg"
        alt="recommended-video"
      />
    );
    const videoImage = getByRole('img');
    expect(videoImage).toHaveAttribute(
      'src',
      'https://i.ytimg.com/vi/6C9QVEmNLr0/hqdefault.jpg'
    );
    expect(videoImage).toHaveAttribute('alt', 'recommended-video');
  });
});
