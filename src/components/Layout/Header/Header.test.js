import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { screen, render } from '@testing-library/react';

import Header from './Header';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

test('logo must have the right text and link to home', () => {
  const logo = screen.getByRole('link');
  expect(logo.textContent).toEqual('DarkBeat');
  expect(logo).toHaveAttribute('href', '/');
});

test('must be favorites, search and login buttons', () => {
  expect(screen.getByRole('button', { name: 'Favorites' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});
