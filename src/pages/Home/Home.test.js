import React from 'react';
import { screen, render } from '@testing-library/react';

import HomePage from './Home.page';

const videos = [
  {
    id: 123,
    title: '1 Title test',
    description: '1 Description test',
    thumbnail: '1 Url Test',
  },
  {
    id: 345,
    title: '2 Title test',
    description: '2 Description test',
    thumbnail: '2 Url Test',
  },
];

beforeEach(() => {
  render(<HomePage videoList={videos} />);
});

test('must the title Recommended for you', () => {
  expect(screen.getByText(/Recommended for you/i)).toBeInTheDocument();
});
