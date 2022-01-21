import React from 'react';
import { screen, render } from '@testing-library/react';

import Favorites from './Favorites.component';

beforeEach(() => {
  render(<Favorites />);
});

test('There should be a title Favorites and a button', () => {
  expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
