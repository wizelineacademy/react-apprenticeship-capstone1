import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import '@testing-library/react';
import Card from './Card.component';

test('renders content', () => {
  render(<Card />);
});
