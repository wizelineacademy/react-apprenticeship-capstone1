import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar.component';
import React from 'react';

describe('SearchBar component', () => {
  test('Input allows writing', () => {
    const { getByRole } = render(<SearchBar />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Wizeline' } });

    expect(input.value).toBe('Wizeline');
  });
});
