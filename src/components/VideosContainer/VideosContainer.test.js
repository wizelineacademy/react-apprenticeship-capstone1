import React from 'react';
import { render, screen } from '@testing-library/react';
import VideosContainer from './VideosContainer';

describe('VideosContainer Component', () => {
  test('renders content', () => {
    render(<VideosContainer />);
  });
  //   test('Cards render properly', () => {
  //     render(<VideosContainer />);
  //     const card = screen.getByTestId('EMk6nom1aS4');
  //     expect(card).toBeInTheDocument();
  //   });
  test('Show is loading while waiting for API response ', () => {
    render(<VideosContainer />);
    const isLoading = screen.getByText('Loading...');
    expect(isLoading).toBeInTheDocument();
  });
});
