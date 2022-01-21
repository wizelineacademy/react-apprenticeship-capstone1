import { render } from '@testing-library/react';
import Home from './Home.page';
import React from 'react';

describe('Home', () => {
  test('Has a title', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Recommended for you')).toBeInTheDocument();
  });
});
