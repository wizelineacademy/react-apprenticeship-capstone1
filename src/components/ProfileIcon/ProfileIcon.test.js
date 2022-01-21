import { render, fireEvent } from '@testing-library/react';
import ProfileIcon from './ProfileIcon.component';
import React from 'react';

describe('Header component', () => {
  test('nav button function', () => {
    const { getByRole } = render(<ProfileIcon />);
    const button = getByRole('button', { name: /loginIcon/i });
    fireEvent.click(button);
  });
});
