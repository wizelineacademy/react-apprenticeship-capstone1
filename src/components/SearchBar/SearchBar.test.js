import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders content', () => {
    render(<SearchBar />);
  });
  test('input value change when typing', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'wize' } });
    expect(input.value).toBe('wize');
  });
});
