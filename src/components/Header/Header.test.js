import { render, fireEvent } from '@testing-library/react';
import Header from './Header.component';
import React from 'react';

describe('Header component', () => {
  test('nav button function', () => {
    const { getByRole } = render(<Header />);
    const button = getByRole('button', { name: /menu/i });
    fireEvent.click(button);
  });
});
