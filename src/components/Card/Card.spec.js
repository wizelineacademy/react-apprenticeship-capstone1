import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card.component';

describe('show card component', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });
  test('card should have a title text', () => {
    const { baseElement, getByText } = render(<Card title="youtube video" />);
    getByText('youtube video');
    expect(baseElement).toBeTruthy();
  });
  test('card should have a subtitle text', () => {
    const { baseElement, getByText } = render(
      <Card subtitle="subtitle here" />
    );
    getByText('subtitle here');
    expect(baseElement).toBeTruthy();
  });
  test('Click on card', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Card title="title of video" />
      </Router>
    );
    const card = screen.getByText('title of video');
    expect(card).toBeInTheDocument();
    userEvent.click(card);
    expect(history.location.pathname).toBe('/');
  });

  test('card has an image of video', () => {
    const { getByRole } = render(
      <Card
        videoImage="https://i.ytimg.com/vi/6C9QVEmNLr0/hqdefault.jpg"
        alt="video img"
      />
    );
    const videoImage = getByRole('img');
    expect(videoImage).toHaveAttribute(
      'src',
      'https://i.ytimg.com/vi/6C9QVEmNLr0/hqdefault.jpg'
    );
    expect(videoImage).toHaveAttribute('alt', 'video img');
  });
});
