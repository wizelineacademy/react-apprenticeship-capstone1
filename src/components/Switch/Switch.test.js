import { render, screen } from '@testing-library/react';
import Switch from './Switch.component';
import React from 'react';

describe('Switch component', () => {
  test('renders and input and a label', () => {
    const { getByRole } = render(<Switch />);

    getByRole('checkbox');
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });
});
