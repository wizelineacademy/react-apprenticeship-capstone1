import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders content', () => {
    render(<App />);
    expect(screen.getByText('Wize')).toBeInTheDocument();
  });
});
