import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders content', () => {
    render(<Navbar />);
  });
  test('Home menu has attribute', () => {
    render(<Navbar />);
    const linkElement = screen.getByTestId('menu-link');
    expect(linkElement).toHaveAttribute('href', '/');
  });
  test('Theme Button exists in navbar', () => {
    render(<Navbar />);
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });
});
